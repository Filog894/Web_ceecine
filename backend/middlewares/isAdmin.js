import jwt from 'jsonwebtoken';
import Account from '../models/accountModel.js'; // Mô hình Account để lấy thông tin vai trò người dùng

// Middleware kiểm tra quyền admin
const isAdmin = async (req, res, next) => {
  // Lấy token từ header của request
  const token = req.headers.authorization?.split(' ')[1]; // Lấy token sau "Bearer <token>";

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  try {
    // Xác thực token và lấy thông tin người dùng (id)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const accountId = decoded.id;

    // Tìm tài khoản trong database
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Kiểm tra vai trò người dùng
    if (account.role !== 'Admin') {
      return res.status(403).json({ message: "Access forbidden: Admins only" });
    }

    // Nếu là admin, cho phép tiếp tục request
    req.user = account;
    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default isAdmin;
