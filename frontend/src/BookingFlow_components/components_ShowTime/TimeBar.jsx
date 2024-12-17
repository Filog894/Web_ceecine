import React, { useState, useEffect } from "react";
import "./TimeBar.css";

const days = [
  { day: "Thứ 2", date: "2024-12-13" },
  { day: "Thứ 3", date: "2024-12-14" },
  { day: "Thứ 4", date: "2024-12-15" },
  { day: "Thứ 5", date: "2024-12-16" },
  { day: "Thứ 6", date: "2024-12-17" },
  { day: "Thứ 7", date: "2024-12-18" },
  { day: "Chủ Nhật", date: "2024-12-19" },
];

const TimeBar = ({ onDateSelect }) => {
  const defaultIndex = 0;
  const [selectedDay, setSelectedDay] = useState(defaultIndex);

  useEffect(() => {
    // Truyền ngày mặc định cho onDateSelect nếu tồn tại
    if (onDateSelect) {
      onDateSelect(days[defaultIndex].date);
    }
  }, [onDateSelect]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Trả về chỉ ngày/tháng (dùng toLocaleDateString để định dạng)
    return date
    .toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })
    .replace(/-/g, "/"); // Thay đổi mọi dấu '-' thành '/'
  };
  
  const handleDayClick = (index) => {
    setSelectedDay(index);
    if (onDateSelect) {
      onDateSelect(days[index].date); // Gọi hàm onDateSelect để cập nhật ngày
    }
  };

  return (
    <div className="booking-bar">
      {days.map((day, index) => (
        <div
          key={index}
          className={`day-item ${selectedDay === index ? "active" : ""}`}
          onClick={() => handleDayClick(index)}
        >
          <p className="day-label">{day.day}</p>
          <p className="date-label">{formatDate(day.date)}</p>
        </div>
      ))}
      
    </div>
  );
};

export default TimeBar;
