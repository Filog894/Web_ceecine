import crypto from 'crypto';

// Hàm tạo OTP ngẫu nhiên
export const generateOTP = () => {
  return crypto.randomBytes(3).toString('hex');  // Tạo chuỗi ngẫu nhiên 6 ký tự
};