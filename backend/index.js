import dotenv from "dotenv";
import express from 'express';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // parse req.body

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    // console.log(`DB: ${process.env.MONGO_URI}`);
    console.log(`Server is running on port ${PORT}...`);
});
