import { API_URL } from "./config";

export const createDeck = async (title: string) => {
  const res = await fetch(`${API_URL}/decks`, {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return res.json();
};
