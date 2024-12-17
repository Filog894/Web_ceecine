import React, { useState } from 'react';
import { Input, Row, Col, List, Button, Modal, Form } from 'antd';
// ...existing code...

const AddTheater = () => {
    const [address, setAddress] = useState('');
    const [mapAddress, setMapAddress] = useState('');
    const [cinemaRooms, setCinemaRooms] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newRoomName, setNewRoomName] = useState('');
    const [newRoomCapacity, setNewRoomCapacity] = useState('');
    const [editRoomIndex, setEditRoomIndex] = useState(null);
    const [isSeatModalVisible, setIsSeatModalVisible] = useState(false);
    const [selectedRoomSeats, setSelectedRoomSeats] = useState([]);

    const handleSubmit = () => {
        // Handle submit logic here
        console.log('Address:', address);
        console.log('Map Address:', mapAddress);
        console.log('Cinema Rooms:', cinemaRooms);
    };

    const handleAddRoom = () => {
        if (editRoomIndex !== null) {
            const updatedRooms = [...cinemaRooms];
            updatedRooms[editRoomIndex] = { name: newRoomName, capacity: newRoomCapacity, seats: selectedRoomSeats };
            setCinemaRooms(updatedRooms);
            setEditRoomIndex(null);
        } else {
            setCinemaRooms([...cinemaRooms, { name: newRoomName, capacity: newRoomCapacity, seats: [] }]);
        }
        setIsModalVisible(false);
        setNewRoomName('');
        setNewRoomCapacity('');
    };

    const handleEditRoom = (index) => {
        setEditRoomIndex(index);
        setNewRoomName(cinemaRooms[index].name);
        setNewRoomCapacity(cinemaRooms[index].capacity);
        setSelectedRoomSeats(cinemaRooms[index].seats || []);
        setIsModalVisible(true);
    };

    const handleDeleteRoom = (index) => {
        setCinemaRooms(cinemaRooms.filter((_, i) => i !== index));
    };

    const handleEditSeats = (index) => {
        setEditRoomIndex(index);
        setSelectedRoomSeats(cinemaRooms[index].seats || []);
        setIsSeatModalVisible(true);
    };

    const handleSaveSeats = () => {
        const updatedRooms = [...cinemaRooms];
        updatedRooms[editRoomIndex].seats = selectedRoomSeats;
        setCinemaRooms(updatedRooms);
        setIsSeatModalVisible(false);
    };

    const renderSeats = (capacity) => {
        const rows = Math.ceil(capacity / 10);
        const seats = [];
        for (let i = 0; i < rows; i++) {
            const rowSeats = [];
            for (let j = 0; j < 10 && i * 10 + j < capacity; j++) {
                rowSeats.push(
                    <span key={i * 10 + j} style={{ display: 'inline-block', width: '20px', height: '20px', border: '1px solid black', margin: '2px' }}>
                        {i * 10 + j + 1}
                    </span>
                );
            }
            seats.push(<div key={i} style={{ marginBottom: '5px' }}>{rowSeats}</div>);
        }
        return seats;
    };

    return (
        <div>
            <Row gutter={16} style={{ marginBottom: '16px' }}>
                <Col span={12}>
                    <Input
                        placeholder="Nhập tên rạp"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        placeholder="Nhập địa chỉ rạp"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <Input
                        placeholder="Link google map địa chỉ rạp"
                        value={mapAddress}
                        onChange={(e) => setMapAddress(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                </Col>
                
            </Row>
            <Row style={{ marginBottom: '16px' }}>
                <Col span={24}>
                    <h3>Phòng chiếu</h3>
                    <List
                        bordered
                        dataSource={cinemaRooms}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[
                                    <Button type="link" onClick={() => handleEditRoom(index)}>Edit</Button>,
                                    <Button type="link" onClick={() => handleDeleteRoom(index)}>Delete</Button>,
                                    <Button type="link" onClick={() => handleEditSeats(index)}>Edit Seats</Button>
                                ]}
                            >
                                {item.name} - Capacity: {item.capacity}
                            </List.Item>
                        )}
                    />
                    <Button type="dashed" onClick={() => setIsModalVisible(true)} style={{ marginTop: '10px', marginBottom:'10px' }}>
                        Thêm phòng chiếu
                    </Button>
                </Col>

                <Col span={24}>
                    <Button type="primary" onClick={handleSubmit}>
                        Lưu rạp phim
                    </Button>
                </Col>
            </Row>
            <Modal
                title={editRoomIndex !== null ? "Edit Cinema Room" : "Add Cinema Room"}
                visible={isModalVisible}
                onOk={handleAddRoom}
                onCancel={() => setIsModalVisible(false)}
            >
                <Form layout="vertical">
                    <Form.Item label="Room Name">
                        <Input
                            value={newRoomName}
                            onChange={(e) => setNewRoomName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Room Capacity">
                        <Input
                            value={newRoomCapacity}
                            onChange={(e) => setNewRoomCapacity(e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Edit Seats"
                visible={isSeatModalVisible}
                onOk={handleSaveSeats}
                onCancel={() => setIsSeatModalVisible(false)}
            >
                <Form layout="vertical">
                    <Form.Item label="Seats">
                        {renderSeats(newRoomCapacity)}
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddTheater;
