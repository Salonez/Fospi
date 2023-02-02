import mongoose from 'mongoose';

const MealSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        kilojoules: {
            type: Number,
            required: true
        },
        options: {
            type: [[String]],
            default: []
        },
        compatibleDiets: {
            type: [String],
            default: []
        },
        incompatibleDiets: {
            type: [String],
            default: []
        },
        picture: {
            type: Buffer,
            required: true
        }
    }
);

export default mongoose.model('Meal', MealSchema, 'meal');