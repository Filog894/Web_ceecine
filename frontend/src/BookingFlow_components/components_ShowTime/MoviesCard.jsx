import React from 'react';
import './MovieCard.css'; // Import file CSS riêng
import avengerposter from '../../assets/img/avengerposter.jpg';

function MovieCard() {
  return (
    <div className="movie-card">
      {/* Thông tin phim */}
      <div className="movie-content">
        <div className="movie-poster">
          <img src={avengerposter} alt="Avengers: Infinity War" />
        </div>

        
        <div className="movie-details">
          <h2>Avengers: Infinity War</h2>
          <p className="movie-duration">🕒 2 giờ 29 phút <span className="movie-date">📅 12/08/2023</span> </p>
          

          <div className="movie-info">
            <p>Quốc gia: <strong>Mỹ</strong></p>
            <p>Nhà sản xuất: <strong>Marvel</strong></p>
            <p>Thể loại: <strong>Hành động, Khoa học viễn tưởng</strong></p>
          </div>
        </div>

        {/* Badge góc phải */}
        <div className="movie-badge">
          <span>T18</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;