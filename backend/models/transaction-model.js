import mongoose from 'mongoose'
import BookingModel from './booking-model.js'
import PaymentModel from './payment-model.js'


const TransactionSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BookingModel,
        required: true,
    },
    movieTitle: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    paymentId: {
        type: mongoose.Types.ObjectId,
        ref:PaymentModel,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

TransactionSchema.index({ bookingId: 1 }); // Tối ưu hóa tìm kiếm theo Booking ID
TransactionSchema.index({ movieTitle: 1, date: 1 }); // Tối ưu hóa tìm kiếm lịch sử theo phim và ngày

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
