import mongoose from "mongoose";

const oppejoud = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    specialization: {
        type: String,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Oppeaine',
    }],
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Klassiruumid',
    }],
})

export default mongoose.model('Oppejoud', oppejoud);