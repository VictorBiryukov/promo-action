import React, { FC, useState } from 'react'

import { Button, Form, Input, Modal, Select, Spin, Table } from 'antd'

import { useSearchGiftQuery, SearchGiftDocument, useCreateGiftMutation, useDeleteGiftMutation, _En_GiftKind } from '../__generate/graphql-frontend'

const { Option } = Select

const columns = [
    {
        title: "Serial Number",
        key: 'serialNumber',
        dataIndex: 'serialNumber',
    },
    {
        title: "Kind",
        key: 'kind',
        dataIndex: 'kind',
    },
    {
        title: "",
        key: 'action',
        dataIndex: 'action',
    },

]

interface GiftListProps {
    vendorId: string
}

export const GiftList: FC<GiftListProps> = ({ vendorId }) => {

    const [showCreateForm, setShowCreateForm] = useState<boolean>(false)
    const [serialNumber, setSerialNumber] = useState<string>("")
    const [kind, setKind] = useState<_En_GiftKind>(_En_GiftKind.Cap)


    const { data, loading, error } = useSearchGiftQuery({
        variables: {
            cond: "it.vendor.$id == '" + vendorId + "'"
        }
    })
    const giftList = data?.searchGift.elems

    const [createGiftMutation] = useCreateGiftMutation()
    const [deleteGiftMutation] = useDeleteGiftMutation()

    const mapToView = (list: typeof giftList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
                    serialNumber: elem.serialNumber,
                    kind: elem.kind,
                    action: (
                        <Button
                            onClick={() => {
                                deleteGiftMutation({
                                    variables: {
                                        id: elem.id
                                    },
                                    update: (store) => {
                                        store.writeQuery({
                                            query: SearchGiftDocument,
                                            variables: {
                                                cond: "it.vendor.$id == '" + vendorId + "'"
                                            },
                                            data: {
                                                searchGift: {
                                                    elems: giftList!.filter(x => x.id !== elem.id)
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                            }>Delete
                        </Button>
                    )
                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <>
            <Button type="primary" style={{ margin: "20px" }}
                onClick={() => setShowCreateForm(true)}>
                Add new gift
            </Button>
            <Modal visible={showCreateForm}
                onCancel={() => setShowCreateForm(false)}
                onOk={() => {
                    setShowCreateForm(false)
                    createGiftMutation({
                        variables: {
                            vendorId,
                            serialNumber,
                            kind
                        },
                        update: (store, result) => {
                            store.writeQuery({
                                query: SearchGiftDocument,
                                variables: {
                                    cond: "it.vendor.$id == '" + vendorId + "'"
                                },
                                data: {
                                    searchGift: {
                                        elems: [, ...giftList!, result.data?.packet?.createGift]
                                    }
                                }
                            })
                        }
                    })
                }}
            >
                <Form>
                    <Form.Item label="Serial number">
                        <Input
                            onChange={e => setSerialNumber(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Kind">
                        <Select showArrow={true}
                            onChange={(value) => {
                                setKind(value)
                            }}
                            value={kind}
                        >

                            {Object.keys(_En_GiftKind).map(it =>
                                <Option value={_En_GiftKind[it as keyof typeof _En_GiftKind]} key={it}>
                                    {_En_GiftKind[it as keyof typeof _En_GiftKind]}
                                </Option>)}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
            <Table
                columns={columns}
                dataSource={mapToView(giftList)}
            />
        </>
    )




}

