import mongoose from "mongoose";

const opilane = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
        dateOfBirth: {
        type: Date,
    },
    email: {
        type: String,
        unique: true,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Oppeaine',
    }],
})

export default mongoose.model('Opilane', opilane);