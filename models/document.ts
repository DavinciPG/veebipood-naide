import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    documentType: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    issueDate: {
        type: Date,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    issuingCountry: {
        type: String,
        required: true,
    },
  });
  
export default mongoose.model("Document", documentSchema);