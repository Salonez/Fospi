import express from "express";
import mongoose from 'mongoose';
import User from './models/User.js';
import cors from 'cors';
import { ObjectId } from "bson"

const app = express();
app.use(express.json());

// Connect to mongo data base.
async function main () {
    await mongoose.connect("mongodb+srv://Tyrone:mernstack@cluster0.smbi268.mongodb.net/?retryWrites=true&w=majority")
}
main().catch((err) => {console.log(err)});
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('Connected to database'))

// For backend to know what is frontend's address.
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    console.log("inside get point")
})

app.post('/register', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin
    })

    try {
        const newUser = await user.save();
        const userId = newUser._id.toString();
        res.status(200).json({id: userId});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            res.status(404).json({message: "User not found."});
        } else if (user.password !== req.body.password) {
            res.status(403).json({message: "Incorrect password."});
        } else {
            const userId = user._id.toString();
            res.status(200).json({message: "User found.", id: userId});
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

app.post('/DietaryNeeds', async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectId(req.body._id)});
        if (!user) {
            res.status(404).json({message: "User not found."});
        } else {
            res.status(200).json({message: "User found.", diets: user.diet});
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

app.post('/UpdateDietaryNeeds', async (req, res) => {
    try {
        const user = await User.updateOne({_id: ObjectId(req.body._id)},{$set : {diet: req.body.diets}});
        res.status(200).json({message: "Updated dietary needs"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})


app.listen(8000, () => console.log("Server is running on port 8000"));