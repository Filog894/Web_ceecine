import rateLimit from 'express-rate-limit';


// Tạo middleware giới hạn đăng nhập
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 5, // Tối đa 5 lần thử trong khoảng thời gian trên
  message: {
    status: 429,
    message: 'Quá nhiều lần đăng nhập. Vui lòng thử lại sau 15 phút.'
  },
  standardHeaders: true, // Gửi thông tin giới hạn đến client qua các header chuẩn
  legacyHeaders: false, // Không gửi các header cũ
});

export default loginLimiter;