import mongoose from "mongoose";


const AccountSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    password: { 
        type: String, 
        required: true 
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "members", 
        required: true 
    },
    role: {
        type: String,
        enum: ['Admin', 'User', 'Guest'], 
        default: 'User'
    },
    passwordResetToken: { type: String, default: null },  // Lưu trữ OTP
    passwordResetExpires: { type: Date, default: null },
    isOtpVerified: { type: Boolean, default: false }
});

const Account= mongoose.model("accounts", AccountSchema)
export default Account;

