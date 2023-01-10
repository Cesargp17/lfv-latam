import mongoose, { model, Schema } from "mongoose";

const emailSchema = new Schema({
    email: { type: String, required: true },
}, {
    timestamps: true
});

const Email = mongoose.models.Email || model('Email', emailSchema);

export default Email;