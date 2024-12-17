import React from 'react';
import './Promotion.css'; // Tạo CSS riêng để tạo giao diện giống như hình
import VoucherCardList from './VoucherCardList';
const Promotion = () => {
  return (
    <div className="promo-container">
      <h2>Khuyến mãi</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Mã giảm giá"
          className="promo-input"
        />
        <button className="apply-button">Áp dụng</button>
      </div>
      <VoucherCardList></VoucherCardList>
    </div>
  );
};

export default Promotion;
