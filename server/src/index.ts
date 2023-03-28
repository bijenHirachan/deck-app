import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "../models/Deck";
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

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find();

  return res.status(200).json({
    decks,
  });
});

app.post("/decks", async (req: Request, res: Response) => {
  const { title } = req.body;
  const deck = await Deck.create({ title });

  return res.status(201).json({
    deck,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
