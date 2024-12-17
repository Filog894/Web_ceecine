import { Space, Table, Modal, Form, Input, Button } from "antd";
import React, { useState } from "react";

interface DataType {
  key: string;
  title: string;
  description: string;
  duration: number;
  genre: string;
  rating: number;
  limit_age: string;
  poster_url: string;
}

const handleDelete = (key: string) => {
  // Implement the delete logic here
  console.log(`Deleting film with key: ${key}`);
};
const data: DataType[] = [
  {
    "key": "6730ac6e1bcb231ca5aaf64b",
    "title":"Avatar 2: Dòng chảy của nước",
    "description":"Avatar 2 - Dòng chảy của nước là bộ phim hành động Mỹ hay nhất thuộc thể loại khoa học viễn tưởng. Pấy bối cảnh hơn một thập kỷ sau khi người Na'vi đẩy lùi cuộc xâm lược của RDA khỏi Pandora. Jake Sully giờ đây là thủ lĩnh Omaticaya, chung sống hạnh phúc với Neytiri và các con của họ. Tuy nhiên, mối đe dọa từ RDA vẫn hiện hữu… Cùng đón xem bộ phim chiếu rạp này để theo dõi hành trình của gia đình Jake Sully.",
    "duration": 120,
    "genre":"Hành động, Viễn tưởng",
    "rating":9.0,
    "limit_age":"T13",
    "poster_url":"https://cdn.galaxycine.vn/media/2024/10/16/venom-sneak-500_1729048419589.jpg"},
    {
      "key": "6730ac6e1bcb231ca5aaf64b",
      "title":"Venom: Kèo cuối",
      "description":"Sau chuyến du lịch ngắn sang quê nhà của Spider-Man: No Way Home (2021), Eddie Brock (Tom Hardy) giờ đây cùng Venom “hành hiệp trượng nghĩa” và “nhai đầu” hết đám tội phạm trong thành phố. Tuy nhiên, đi đêm lắm cũng có ngày gặp ma, chính phủ Mỹ đã phát hiện ra sự tồn tại của con quái vật ngoài hành tinh này. Anh chàng buộc phải trở thành kẻ đào tẩu, liên tục trốn chạy khỏi những cuộc truy quét liên tục. Thế nhưng, đây chưa phải là rắc rối lớn nhất… Những con quái vật gớm ghiếc bất ngờ xuất hiện tại nhiều nơi. Hành tinh của chủng tộc Symbiote đã phát hiện ra Trái Đất và chuẩn bị cho cuộc xâm lăng tổng lực. Eddie Brock và Venom sẽ phải làm gì để ngăn chặn mối đe dọa này?",
      "duration": 120,
      "genre":"Hành động, Viễn tưởng",
      "rating":9.0,
      "limit_age":"T13",
      "poster_url":"https://cdn.galaxycine.vn/media/2024/10/16/venom-sneak-500_1729048419589.jpg"}
  
];
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Limit Age",
    dataIndex: "limit_age",
    key: "limit_age",
  },
  {
    title: "Poster",
    dataIndex: "poster_url",
    key: "poster_url",
    render: (url) => <img src={url} alt="poster" style={{ width: '50px' }} />,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => showEditModal(record)}>Edit</a>
        <a onClick={() => handleDelete(record.key)} style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];

const DemoTable: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingFilm, setEditingFilm] = useState<DataType | null>(null);

  const showEditModal = (film: DataType) => {
    setEditingFilm(film);
    setIsModalVisible(true);
  };

  const handleEdit = (values: DataType) => {
    // Implement the edit logic here
    console.log('Editing film:', values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit Film"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {editingFilm && (
          <Form
            initialValues={editingFilm}
            onFinish={handleEdit}
          >
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input />
            </Form.Item>
            <Form.Item name="duration" label="Duration">
              <Input />
            </Form.Item>
            <Form.Item name="genre" label="Genre">
              <Input />
            </Form.Item>
            <Form.Item name="rating" label="Rating">
              <Input />
            </Form.Item>
            <Form.Item name="limit_age" label="Limit Age">
              <Input />
            </Form.Item>
            <Form.Item name="poster_url" label="Poster URL">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default DemoTable;