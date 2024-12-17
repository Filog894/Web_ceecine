import React, { useState } from "react";
import "./CinemaSelector.css"; // Import file CSS

const CinemaSelector = () => {
  const [location, setLocation] = useState("Toàn quốc");
  const [cinemaType, setCinemaType] = useState("Tất cả các loại rạp");

  return (
    <div className="cinema-selector">
      {/* Chọn vị trí */}
      <div className="dropdown">
        <button className="dropdown-btn">
          <span className="icon">☰</span> {location}
        </button>
        <div className="dropdown-content" >
          <p onClick={() => setLocation("Toàn quốc")}>Toàn quốc</p>
          <p onClick={() => setLocation("Hà Nội")}>Hà Nội</p>
          <p onClick={() => setLocation("TP. Hồ Chí Minh")}>TP. Hồ Chí Minh</p>
        </div>
      </div>

      {/* Chọn loại rạp */}
      <div className="dropdown">
        <button className="dropdown-btn">
          <span className="icon">☰</span> {cinemaType}
        </button>
        <div className="dropdown-content">
          <p onClick={() => setCinemaType("Tất cả các loại rạp")}>Tất cả các loại rạp</p>
          <p onClick={() => setCinemaType("Rạp 2D")}>Rạp 2D</p>
          <p onClick={() => setCinemaType("Rạp 3D")}>Rạp 3D</p>
        </div>
      </div>
    </div>
  );
};

export default CinemaSelector;
