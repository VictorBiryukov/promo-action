import React, { FC, useState } from 'react'
import 'antd/dist/antd.css';
import {  Button, Form, Input, Layout, Modal } from 'antd';
// import Button from 'antd/lib/button'
// import Form from 'antd/lib/form'
// import Input from 'antd/lib/input'
// import Layout from 'antd/lib/layout'
// import Modal from 'antd/lib/modal'
const { Content, Footer, Header } = Layout;
import { AppProvider } from './AppProvider'



export const App: FC = () => {

    const [showLoginPage, setShowLoginPage] = useState<boolean>(false)
    const [appAddress, setAppAddress] = useState<string>(localStorage.getItem("appAddress") as string)
    const [appKey, setAppKey] = useState<string>(localStorage.getItem("appKey") as string)
    const [appSecret, setAppSecret] = useState<string>(localStorage.getItem("appSecret") as string)


    return (
        <Layout>
            <Header>
                <Button onClick={() => setShowLoginPage(true)}>
                    Login page
                </Button>
                <Modal visible={showLoginPage}
                    onCancel={() => setShowLoginPage(false)}
                    onOk={() => {
                        setShowLoginPage(false)
                    }}
                >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Service address"
                                value = {appAddress}
                                onChange={e => setAppAddress(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Service key"
                                value = {appKey}
                                onChange={e => setAppKey(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password placeholder="Service secret"
                                value = {appSecret}
                                onChange={e => setAppSecret(e.target.value)}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
            <Content>
                {(appAddress && appKey && appSecret && !showLoginPage) &&
                    <AppProvider appAddress={appAddress} appKey={appKey} appSecret={appSecret} />}

            </Content>
        </Layout>
    )

}

