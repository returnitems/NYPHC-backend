import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import playerRoutes from "./routes/playerRoutes.js";
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use('/players', playerRoutes);

app.listen(3033, () => {
    console.log('Backend running...');
});