import React, { FC, useState } from 'react'
import { Button, Form, Input, Modal, Spin, Tabs } from 'antd'

// import Button from 'antd/lib/button'
// import Form from 'antd/lib/form'
// import Input from 'antd/lib/input'
// import Modal from 'antd/lib/modal'
// import Spin from 'antd/lib/spin'
// import Tabs from 'antd/lib/tabs'

import { useSearchGiftVendorQuery, SearchGiftVendorDocument, useCreateGiftVendorMutation, useDeleteGiftVendorMutation } from '../__generate/graphql-frontend'
import { GiftList } from './GiftList'

const { TabPane } = Tabs

const columns = [
    {
        title: "Name",
        key: 'name',
        dataIndex: 'name',

    },
    {
        title: "Gifts",
        key: 'gifts',
        dataIndex: 'gifts',

    },
]

export const GiftVendorList: FC = () => {

    const [showCreateForm, setShowCreateForm] = useState<boolean>(false)
    const [vendorName, setVendorName] = useState<string>()


    const { data, loading, error } = useSearchGiftVendorQuery()
    const giftVendorList = data?.searchGiftVendor.elems

    const [createGiftVendorMutation] = useCreateGiftVendorMutation()
    const [deleteGiftVendorMutation] = useDeleteGiftVendorMutation()

    const getTabs = (list: typeof giftVendorList) => {
        return (
            list?.map(elem => {
                return (
                    <TabPane key={elem.id ?? ""} tab={elem.name}>
                        <Button style={{ margin: "20px" }}
                            key={elem.id ?? ""}
                            onClick={(e) => {
                                deleteGiftVendorMutation({
                                    variables: {
                                        id: elem.id
                                    },
                                    update: (store) => {
                                        store.writeQuery({
                                            query: SearchGiftVendorDocument,
                                            data: {
                                                searchGiftVendor: {
                                                    elems: giftVendorList!.filter(x => x.id !== elem.id)
                                                }
                                            }
                                        })
                                    }
                                })
                            }}>Delete gift vendor</Button>
                        <p />
                        <GiftList vendorId={elem.id} />
                    </TabPane>
                )
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            <Button style={{ margin: "20px" }}
                onClick={() => setShowCreateForm(true)}>
                Add new gift vendor
            </Button>
            <Modal visible={showCreateForm}
                onCancel={() => setShowCreateForm(false)}
                onOk={() => {
                    setShowCreateForm(false)
                    createGiftVendorMutation({
                        variables: {
                            name: vendorName!
                        },
                        update: (store, result) => {
                            store.writeQuery({
                                query: SearchGiftVendorDocument,
                                data: {
                                    searchGiftVendor: {
                                        elems: [, ...giftVendorList!, result.data?.packet?.createGiftVendor]
                                    }
                                }
                            })
                        }
                    })
                }}
            >
                <Form>
                    <Form.Item>
                        <Input placeholder="Vendor name"
                            onChange={e => setVendorName(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Form style={{ margin: "10px" }}>
                <Form.Item>
                    <Tabs>
                        {getTabs(giftVendorList)}
                    </Tabs>
                </Form.Item>
            </Form>

        </>
    )




}

