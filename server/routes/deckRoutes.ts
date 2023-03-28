import express from "express";
import { createCard, deleteCard } from "../controllers/cardController";
import {
  createDeck,
  deleteDeck,
  getDecks,
  getDeck,
} from "../controllers/deckController";

const router = express.Router();

router.route("/decks").get(getDecks).post(createDeck);
router.route("/decks/:id").get(getDeck).post(createCard).delete(deleteDeck);
router.route("/decks/:id/cards/:index").delete(deleteCard);
export default router;
