import { API_URL } from "./config";

export const deleteDeck = async (id: string) => {
  const res = await fetch(`${API_URL}/decks/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
