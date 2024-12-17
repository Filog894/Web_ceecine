import React from "react";
import "./confirmselectseat.css"; // Import file CSS
import avengerposter from '../../assets/img/avengerposter.jpg';
import { useNavigate } from "react-router";

function ConfirmSelectSeat ({selectedSeats, seatPrice}) {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate('/cornpage')
  };

  const totalPrice = selectedSeats.length * seatPrice;

  return (
    <div className="container">
      <div className="container_card">
        <div className="card">
          {/* Poster */}
          <img
            src={avengerposter} // Thay link này bằng link poster phim
            alt="Avengers: Infinity War"
            className="poster"
          />

          {/* Thông tin rap chiếu*/}
          <div className="info">
            <h3 className="title">AVENGERS: INFINITY WAR</h3>
            <p className="subtitle">2D Phụ đề</p>
            <div className="details">
              <p>Rạp:</p>
              <p>Thứ:</p>
              <p>Giờ:</p>
            </div>
          </div>
        </div>

        {/*Thanh Ngang */}
        <div className="crossbar"></div>

        {/*Thông tin ghế */}
        <div className="infoseat">
          <div className="seatdetail">
            <p> Số lượng ghế: {selectedSeats.length}</p>
            <p> Vị trí ghế: {selectedSeats.join(", ")}</p>
          </div>
          <div className="seatprice"> {selectedSeats.length} x {seatPrice}</div>
        </div>
      </div>

      {/*Tổng tiền*/}
      <div className="total">
        <div className="totaltext"> Tổng tiền: </div>
        <div className="totalprice"> {totalPrice.toLocaleString()}đ </div>
      </div>

      {/* Nút điều hướng */}
      <div className="buttons">
        <button className="button-back" onClick={handleBack}>Quay lại</button>
        <button className="button-next" onClick={handleNext}>Tiếp theo</button>
      </div>
    </div>
  );
};

export default ConfirmSelectSeat;