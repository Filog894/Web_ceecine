import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values: { username: string; password: string }) => {
        console.log("Login Info:", values);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            // Viết api xác thực ở đây
            
            localStorage.setItem("isAuthenticated", "true");
            navigate("/admin/dashboard");
        }, 1000);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card title="Đăng Nhập" style={{ width: 400 }}>
                <Form name="login" layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Đăng Nhập
                        </Button>
                        <Button type="link" onClick={() => navigate("/forgot-password")}>
                            Quên mật khẩu?
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;