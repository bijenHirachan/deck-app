import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export const createCard = async (id: string, text: string): Promise<TDeck> => {
  const res = await fetch(`${API_URL}/decks/${id}`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return res.json();
};
