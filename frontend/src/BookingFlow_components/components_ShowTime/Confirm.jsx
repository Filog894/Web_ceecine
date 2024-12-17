import React from "react";
import "./confirm.css"; // Import file CSS
import avengerposter from '../../assets/img/avengerposter.jpg';
import { useNavigate } from "react-router-dom"

function Confirm () {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate('/selectseats')
  };

  return (
    <div className="container">
      <div className="card">
        {/* Poster */}
        <img
          src={avengerposter} // Thay link này bằng link poster phim
          alt="Avengers: Infinity War"
          className="poster"
        />

        {/* Thông tin */}
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

      {/* Nút điều hướng */}
      <div className="buttons">
        <button className="button-back" onClick={handleBack}>Quay lại</button>
        <button className="button-next" onClick={handleNext}>Tiếp theo</button>
      </div>
    </div>
  );
};

export default Confirm;
