import { Bar, Line, Pie } from '@ant-design/charts';
import { Card, Col, Row } from 'antd';
import React from 'react';

const DemoChart: React.FC = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  const year = currentDate.getFullYear();

  // Mock data for line chart
  const lineData = [
    { month: '7', value: 3000000 },
    { month: '8', value: 4000000 },
    { month: '9', value: 3500000 },
    { month: '10', value: 5000000 },
    { month: '11', value: 4900000 },
  ];

  // Mock data for pie chart
  const pieData = [
    { type: 'CGV', value: 1177750 },
    { type: 'Cinestar', value: 47983 },
    { type: 'BHD Star', value: 457983 },
    { type: 'Galaxy Cinema', value: 2158404 },
    { type: 'Lotte Cinema', value: 1057878 },
  ];

  // Mock data for bar chart
  const barData = [
    { movie: 'Movie A', bookings: 120 },
    { movie: 'Movie B', bookings: 98 },
    { movie: 'Movie C', bookings: 75 },
    { movie: 'Movie D', bookings: 65 },
    { movie: 'Movie E', bookings: 50 },
  ];

  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 3,
    },
  };

  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  const barConfig = {
    data: barData,
    xField: 'movie',
    yField: 'bookings',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      movie: { alias: 'Movie' },
      bookings: { alias: 'Bookings' },
    },
  };

  return (
    <div className="p-4" style={{ width: '100%' }}>
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col span={6}>
          <Card title={`Doanh thu trong ngày (${day}/${month}/${year})`} style={{ width: '100%', backgroundColor: '#f5222d', color: '#fff' }}>
            <p>1,000,000 VND</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title={`Khách hàng mới (${day}/${month}/${year})`} style={{ width: '100%', backgroundColor: '#faad14', color: '#fff' }}>
            <p>50</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title={`Tổng số vé bán ra (${day}/${month}/${year})`} style={{ width: '100%', backgroundColor: '#52c41a', color: '#fff' }}>
            <p>200</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title={`Tổng doanh thu tháng (${month}/${year})`} style={{ width: '100%', backgroundColor: '#1890ff', color: '#fff' }}>
            <p>30,000,000 VND</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title={`Thống kê doanh thu (${year})`} style={{ width: '100%' }}>
            <div style={{ width: '100%', minHeight: '300px' }}>
              <Line {...lineConfig} />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={`Doanh thu từng rạp (${month}/${year})`} style={{ width: '100%' }}>
            <div style={{ width: '100%', minHeight: '300px' }}>
              <Pie {...pieConfig} />
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card title={`Top phim được xem nhiều nhất (${day}/${month}/${year})`} style={{ width: '100%' }}>
            <div style={{ width: '100%', minHeight: '300px' }}>
              <Bar {...barConfig} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DemoChart;
