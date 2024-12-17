import React, { useState } from "react";
import "./MethodPayment.css"; // File CSS để định kiểu

function MethodPayment() {
  const [selectedMethod, setSelectedMethod] = useState(""); // Trạng thái lưu phương thức đã chọn

  const paymentMethods = [
    { id: "card", label: "Card", icon: "💳" },
    { id: "momo", label: "Momo", icon: "📱" },
    { id: "bank", label: "Bank", icon: "🏦" },
    { id: "zalopay", label: "Zalo pay", icon: "💰" },
    { id: "shopeepay", label: "Shopee pay", icon: "🛍️" },
    { id: "gpay", label: "Google pay", icon: "🌀" },
    { id: "vnpay", label: "VNPay", icon: "🇻🇳" },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  return (
    <div className="payment-container">
      <h2>Phương thức thanh toán</h2>
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`payment-button ${
              selectedMethod === method.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(method.id)}
          >
            <span className="icon">{method.icon}</span>
            <span>{method.label}</span>
          </button>
        ))}
      </div>

      {/* Hiển thị thông tin thẻ nếu chọn "Card" */}
      {(selectedMethod === "card" || selectedMethod === 'bank') && (
        <div className="card-info">
          <div className="form-group">
            <label>Mã số thẻ</label>
            <input type="text" placeholder="Nhập mã" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" placeholder="CVV" />
            </div>
          </div>
        </div>
      )}

      {/* Checkbox xác nhận */}
      <div className="checkbox-group">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          Tôi đồng ý với điều khoản sử dụng và mua vé cho người có độ tuổi phù hợp
        </label>
      </div>
    </div>
  );
}

export default MethodPayment;
