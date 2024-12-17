import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
    },
    phone: { 
        type: String, 
        required: true 
    },
    dateOfBirth: { 
        type: Date, 
        required: true 
    },
    gender: { 
        type: String, 
        enum: ['Nam', 'Nữ', 'Khác'], 
        required: true 
    },
    avatar:{ 
        type: String, 
        default: 'https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});


const Member= mongoose.model("members", MemberSchema)
export default Member;