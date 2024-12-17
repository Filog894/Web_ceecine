import type { TableProps } from "antd";
import { Space, Table, Modal, Input } from "antd";
import React, { useState } from "react";

interface DataType {
  key: string;
  name: string;
  location: string;
}

const handleDelete = (key: string) => {
  // Implement the delete logic here
  console.log(`Deleting film with key: ${key}`);
};

const handleEdit = (key: string) => {
  const theater = data.find(item => item.key === key);
  if (!theater) return;

  let name = theater.name;
  let location = theater.location;

  Modal.confirm({
    title: 'Edit Theater',
    content: (
      <div>
        <Input 
          defaultValue={name} 
          onChange={(e) => name = e.target.value} 
          placeholder="Name" 
        />
        <Input 
          defaultValue={location} 
          onChange={(e) => location = e.target.value} 
          placeholder="Location" 
          style={{ marginTop: 10 }} 
        />
      </div>
    ),
    onOk() {
      console.log(`Updated theater with key: ${key}, name: ${name}, location: ${location}`);
      // Implement the update logic here
    },
  });
};

const data: DataType[] = [
  {
    key: '6747070725ba1f3937f5be61',
    name: 'Theater 1',
    location: 'Location 1',
  },
  // Add more data as needed
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => handleEdit(record.key)} style={{ color: 'blue' }}>Edit</a>
        <a onClick={() => handleDelete(record.key)} style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];

const DemoTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default DemoTable;