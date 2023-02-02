import mongoose from 'mongoose';

const AllDietsSchema = mongoose.Schema (
    {
        Diets: {
            type: [String],
            default: []
        }
    }
);

export default mongoose.model('AllDiets', MealSchema, 'allDiets');