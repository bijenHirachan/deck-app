import { API_URL } from "./config";
import { TDeck } from "./getDecks";

export const deleteCard = async (id: string, index: number): Promise<TDeck> => {
  const res = await fetch(`${API_URL}/decks/${id}/cards/${index}`, {
    method: "DELETE",
  });

  return res.json();
};
