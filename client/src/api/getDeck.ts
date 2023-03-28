import { TDeck } from "./getDecks";
import { API_URL } from "./config";

export const getDeck = async (id: string): Promise<TDeck> => {
  const res = await fetch(`${API_URL}/decks/${id}`);

  return res.json();
};
