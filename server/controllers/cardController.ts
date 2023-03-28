import { Request, Response } from "express";
import Deck from "../models/Deck";

export const createCard = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deck = await Deck.findById(id);

  if (!deck) return res.status(404).send("Deck Not Found :(");
  const { text } = req.body;

  deck.cards.push(text);

  await deck.save();

  return res.status(200).json(deck);
};

export const deleteCard = async (req: Request, res: Response) => {
  const { id, index } = req.params;
  const deck = await Deck.findById(id);

  if (!deck) return res.status(404).send("Deck Not Found :(");

  deck.cards.splice(parseInt(index), 1);

  await deck.save();

  return res.status(200).json(deck);
};
