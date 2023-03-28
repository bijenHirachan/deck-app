import { Request, Response } from "express";
import Deck from "../models/Deck";

export const getDecks = async (req: Request, res: Response) => {
  const decks = await Deck.find();

  return res.status(200).json(decks);
};

export const getDeck = async (req: Request, res: Response) => {
  const deck = await Deck.findById(req.params.id);

  if (!deck) return res.status(404).send("Deck Not Found");
  return res.status(200).json(deck);
};

export const createDeck = async (req: Request, res: Response) => {
  const { title } = req.body;
  const deck = await Deck.create({ title });

  return res.status(201).json({
    deck,
  });
};

export const deleteDeck = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Deck.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Deck deleted successfully",
  });
};
