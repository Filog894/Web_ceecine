import React, { useEffect, useState } from "react";
import "./Menu.css"; // Import file CSS
import axios from "axios"; // Thư viện gọi API
import { getFoodList } from "../../api/api";

const MenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="item-container">
      <img src={item.img} alt={item.name} className="item-image" />
      <h4>{item.name}</h4>
      <p>{item.price} VNĐ</p>
      <div className="quantity-control">
        <button onClick={handleDecrease} className="button">-</button>
        <span style={{ fontSize: "15px", color: "white" }}>{quantity}</span>
        <button onClick={handleIncrease} className="button">+</button>
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuData, setMenuData] = useState({
    bapNuoc: [],
    nuocUong: [],
    snack: [],
  });

  useEffect(() => {
    // Gọi API để lấy dữ liệu từ backend
    const fetchData = async () => {
      try {
        const response = await getFoodList(); // Thay URL bằng API backend của bạn
        const allData = response;
        console.log(allData)

        // Phân loại dữ liệu dựa trên category
        const bapNuoc = allData.filter((item) => item.category === "Bắp nước");
        const nuocUong = allData.filter((item) => item.category === "Nước uống");
        const snack = allData.filter((item) => item.category === "Snack");

        // Cập nhật state
        setMenuData({ bapNuoc, nuocUong, snack });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="menu-container">
      {/* Bắp nước */}
      <div>
        <h3 className="section-text">Bắp nước</h3>
        <div className="items-row">
          {menuData.bapNuoc.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Nước uống */}
      <div>
        <h3 className="section-text">Nước uống</h3>
        <div className="items-row">
          {menuData.nuocUong.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Snack */}
      <div>
        <h3 className="section-text">Snack</h3>
        <div className="items-row">
          {menuData.snack.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
