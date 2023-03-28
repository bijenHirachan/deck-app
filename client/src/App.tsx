import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { getDecks, TDeck } from "./api/getDecks";
import { createDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const { deck } = await createDeck(title);
    setDecks([...decks, deck]);

    setTitle("");
  };

  const handleDelete = async (id: string) => {
    await deleteDeck(id);

    setDecks(decks.filter((deck) => deck._id !== id));
  };

  useEffect(() => {
    async function loadDecks() {
      const decks = await getDecks();
      setDecks(decks);
    }
    loadDecks();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDelete(deck._id)}>X</button>
            <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
}

export default App;
