import React from 'react';
import VoucherCard from './VoucherCardneba'; // Đường dẫn tới file VoucherCard
import './VoucherCardList.css';

const VoucherCardList = () => {
  const handleSelectVoucher = (isSelected) => {
    console.log('Voucher selected:', isSelected);
  };

  return (
    <div className="VoucherCardList">
      <VoucherCard
        title="Giảm 20k"
        description="Áp dụng cho thành viên"
        expiryDate="1/1/2025"
        onSelect={handleSelectVoucher}
      />
      <VoucherCard
        title="Giảm 50k"
        description="Áp dụng cho hóa đơn trên 500k"
        expiryDate="30/12/2024"
        onSelect={handleSelectVoucher}
      />
    </div>
  );
};

export default VoucherCardList;
