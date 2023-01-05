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
        compatiableDiets: {
            type: [String],
            default: []
        },
        incompatibleDiets: {
            type: [String],
            default: []
        },
        picture: {
            // got to do
        }
    }
);

export default mongoose.model('Meal', MealSchema, 'meal');