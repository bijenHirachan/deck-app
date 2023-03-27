import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "../models/Deck";

const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

const connectDB = async () => {
  const { connection } = await mongoose.connect(
    "mongodb+srv://bijen1234:bijen1234@cluster0.j8pc21b.mongodb.net/deck-app?retryWrites=true&w=majority"
  );

  console.log(`MongoDb connected on host: ${connection.host}`);
};
connectDB();

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
