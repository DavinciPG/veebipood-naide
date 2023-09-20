import mongoose from "mongoose";

const oppeaine = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
        type: String,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opilane',
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Oppejoud',
    }],
})

export default mongoose.model('Oppeaine', oppeaine);