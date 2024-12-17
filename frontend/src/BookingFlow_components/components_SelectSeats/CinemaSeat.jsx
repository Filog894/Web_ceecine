import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CinemaSeat.css"; // Để thêm CSS tùy chỉnh
import { getSeatsByRoom } from "../../api/api";

const CinemaSeat = ({onSeatChange}) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const hiddenSeats = ["A4", "A5", "A6"];  
  const { roomId } = useParams(); 
  const [seats, setSeats] = useState({});
  useEffect(() => {
    const fetchSeats = async () => {
      const data = await getSeatsByRoom(roomId);
     
      if (data && data.seats) {
        // Chuyển đổi dữ liệu ghế từ API thành state
        const seatMapping = {};
        data.seats.forEach((seat) => {
          const seatKey = `${seat.row}${seat.number}`;
          seatMapping[seatKey] = seat.status; // Trạng thái: "available", "booked", ...
        });
        setSeats(seatMapping);
      }
    };

    fetchSeats();
  }, [roomId]);
  const handleSeatClick = (row, col) => {
    const seatKey = `${row}${col}`;
    setSeats((prevSeats) => {
      if (prevSeats[seatKey] === "booked") return prevSeats; // Không cho chọn ghế đã đặt
      return {
        ...prevSeats,
        [seatKey]: prevSeats[seatKey] === "selected" ? "available" : "selected",
      };
    });
  };

  useEffect(() => {
    // Gửi danh sách ghế đã chọn về component cha
    const selectedSeats = Object.keys(seats).filter(
      (key) => seats[key] === "selected"
    );
    onSeatChange(selectedSeats);
  }, [seats, onSeatChange]);

  return (
    <div className="cinema">
      <div className="screen-container">
        <div className="screen-curve"></div>
        <p className="screen-text">MÀN HÌNH</p>
      </div>
      <div className="seating">
        {rows.map((row) => (
          <div className="row" key={row}>
            {cols.map((col) => {
              const seatKey = `${row}${col}`;
              const isHidden = hiddenSeats.includes(seatKey); // Kiểm tra ghế có cần ẩn không
              const seatStatus = seats[seatKey] || "available";
              return (
                <div
                  key={seatKey}
                  className={`seat ${seatStatus} ${isHidden ? "hidden" : ""}`}
                  onClick={() => handleSeatClick(row, col)}
                >
                  {seatKey}
                </div>
              );
            })}
          </div>
        ))}
      </div>
        <div className="legend">
            <div className="legend-item">
            <span className="seat available"></span> Ghế chưa đặt
            </div>
            <div className="legend-item">
            <span className="seat selected"></span> Ghế đang đặt
            </div>
            <div className="legend-item">
            <span className="seat booked"></span> Ghế đã đặt
            </div>
        </div>
    </div>
  );
};

export default CinemaSeat;