import React, { useState } from "react";
import { Button, Form, Input, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values: { email: string }) => {
        console.log("Email gửi yêu cầu khôi phục mật khẩu:", values.email);
        setLoading(true);

        
        setTimeout(() => {
            setLoading(false);
            //Viết api gửi email khôi phục mật khẩu ở đây
            //..
            
            message.success("Liên kết khôi phục mật khẩu đã được gửi vào email của bạn.");
            navigate("/login");
        }, 1500);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card title="Quên Mật Khẩu" style={{ width: 400 }}>
                <Form name="forgot-password" layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Vui lòng nhập email!" },
                            { type: "email", message: "Email không hợp lệ!" },
                        ]}
                    >
                        <Input placeholder="Nhập email của bạn" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Gửi Yêu Cầu
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type="link" onClick={() => navigate("/login")}>
                            Quay lại Đăng Nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ForgotPassword;