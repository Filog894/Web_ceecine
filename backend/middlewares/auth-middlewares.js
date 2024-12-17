import jwt from 'jsonwebtoken';

// Định nghĩa middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Lấy token sau "Bearer <token>";
  
    if (!token) {
      return res.status(401).json({ message: "Authorization token is missing" });
    }
  
    try {
      // Thực hiện xác thực token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {id: decoded.id};
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
  
  // Xuất middleware
  export default authMiddleware;
  
  