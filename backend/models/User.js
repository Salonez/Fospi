import mongoose from 'mongoose';

const UserSchema = mongoose.Schema (
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        admin: {
            type: Boolean,
            required: true
        },
        diet: {
            type: [String],
            default: []
        }
    }
);

export default mongoose.model('User', UserSchema, 'user');