import React, { FC, useState, useRef } from 'react'
import 'antd/dist/antd.css';
import { Button, Form, Input, Layout, Modal } from 'antd';
const { Content, Header } = Layout;
import { AppProvider } from './AppProvider'



export const App: FC = () => {

    const [showLoginPage, setShowLoginPage] = useState<boolean>(false)
    const [appAddress, setAppAddress] = useState<string>(localStorage.getItem("appAddress") as string)
    const [appKey, setAppKey] = useState<string>(localStorage.getItem("appKey") as string)
    const [appSecret, setAppSecret] = useState<string>(localStorage.getItem("appSecret") as string)
    const initApolloClient = useRef<boolean>(true)

    return (
        <Layout>
            <Header>
                <Button onClick={() => setShowLoginPage(true)}>
                    Login page
                </Button>
                <Modal visible={showLoginPage}
                    onCancel={() => setShowLoginPage(false)}
                    onOk={() => {
                        if (appAddress && appKey && appSecret) {
                            localStorage.setItem("appAddress", appAddress)
                            localStorage.setItem("appKey", appKey)
                            localStorage.setItem("appSecret", appSecret)
                            setShowLoginPage(false)
                            initApolloClient.current = true
                        }
                    }}
                >
                    <Form>
                        <Form.Item>
                            <Input placeholder="Service address"
                                value={appAddress}
                                onChange={e => setAppAddress(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Service key"
                                value={appKey}
                                onChange={e => setAppKey(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password placeholder="Service secret"
                                value={appSecret}
                                onChange={e => setAppSecret(e.target.value)}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
            <Content>
                <AppProvider appAddress={appAddress} appKey={appKey} appSecret={appSecret}
                    initApolloClient={initApolloClient} />
            </Content>
        </Layout>
    )
}