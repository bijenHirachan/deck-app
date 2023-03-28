import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCard } from "../api/createCard";
import { deleteCard } from "../api/deleteCard";
import { getDeck } from "../api/getDeck";
import { TDeck } from "../api/getDecks";

const Deck = () => {
  const params = useParams();
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [text, setText] = useState("");
  const [cards, setCards] = useState<string[]>([]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const { cards: serverCards } = await createCard(params.id!, text);
    // console.log(serverCards);
    setCards(serverCards);
    setText("");
  };

  const handleDelete = async (index: number) => {
    if (!params.id) return;
    const deck = await deleteCard(params.id, index);
    setCards(deck.cards);
  };

  useEffect(() => {
    async function loadDeck() {
      if (!params.id) return;
      const deck = await getDeck(params.id);
      setDeck(deck);
      setCards(deck.cards);
    }
    loadDeck();
  }, [params.id]);

  return (
    <div className="App">
      <h1>{deck?.title}</h1>
      <ul className="decks">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDelete(index)}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
};

export default Deck;
