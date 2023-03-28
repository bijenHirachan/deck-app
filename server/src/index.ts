import express, { Request, Response } from "express";
import mongoose from "mongoose";
import deckRoutes from "../routes/deckRoutes";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URL!);

  console.log(`MongoDb connected on host: ${connection.host}`);
};
connectDB();

app.use("/", deckRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
