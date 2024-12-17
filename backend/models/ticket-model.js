import mongoose from "mongoose";
import ShowtimeModel from './showtime-model.js'
import SeatModel from './seat-model.js'

const TicketSchema = new mongoose.Schema (
    {
       showtime_id:{type:mongoose.Types.ObjectId,ref:ShowtimeModel,required:true},
       seat_id:{type:mongoose.Types.ObjectId,ref:SeatModel,required:true},
       ticketPrice:{type:Number,required:true}
    }
)

const TicketModel= mongoose.model("tickets",TicketSchema)
export default TicketModel
