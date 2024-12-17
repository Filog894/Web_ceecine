import { Button, DatePicker, Form, Input, Modal, Space, Table } from 'antd';
import moment from 'moment';
import { useState } from 'react';
// ...existing code...

const Showtimes = () => {
    const [showtimes, setShowtimes] = useState([
        { id: 1, movieName: 'Movie 1', date: '2023-10-01', time: '18:00' },
        { id: 2, movieName: 'Movie 2', date: '2023-10-02', time: '20:00' },
        // ...other showtimes...
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentShowtime, setCurrentShowtime] = useState(null);
    const [form] = Form.useForm();

    const handleEdit = (showtime) => {
        setCurrentShowtime(showtime);
        form.setFieldsValue({
            ...showtime,
            date: moment(showtime.date),
            time: moment(showtime.time, 'HH:mm')
        });
        setIsEditMode(true);
        setIsModalVisible(true);
    };

    const handleDelete = (id: number) => {
        setShowtimes(showtimes.filter(showtime => showtime.id !== id));
    };

    const handleAdd = () => {
        setIsEditMode(false);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then(values => {
            const formattedValues = {
                ...values,
                date: values.date.format('YYYY-MM-DD'),
                time: values.time.format('HH:mm')
            };
            if (isEditMode) {
                setShowtimes(showtimes.map(showtime => showtime.id === currentShowtime.id ? { ...showtime, ...formattedValues } : showtime));
            } else {
                const newShowtime = { id: Date.now(), ...formattedValues };
                setShowtimes([...showtimes, newShowtime]);
            }
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const columns = [
        {
            title: 'Movie Name',
            dataIndex: 'movieName',
            key: 'movieName',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: { id: any; }) => (
                <Space size="middle">
                    <Button onClick={() => handleEdit(record)}>Edit</Button>
                    <Button onClick={() => handleDelete(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <h1>Showtimes</h1>
            <Button type="primary" onClick={handleAdd}>Add New Showtime</Button>
            <Table dataSource={showtimes} columns={columns} rowKey="id" />
            <Modal title={isEditMode ? "Edit Showtime" : "Add New Showtime"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item name="movieName" label="Movie Name" rules={[{ required: true, message: 'Please input the movie name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please input the date!' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="time" label="Time" rules={[{ required: true, message: 'Please input the time!' }]}>
                        <DatePicker.TimePicker format="HH:mm" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Showtimes;
