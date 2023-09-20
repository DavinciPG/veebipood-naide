import mongoose from "mongoose";

const klassiruumid = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    building: {
        type: String,
        required: true,
    },
    projectorAvailable: {
        type: Boolean,
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Oppejoud',
    }],
})

export default mongoose.model('Klassiruumid', klassiruumid);