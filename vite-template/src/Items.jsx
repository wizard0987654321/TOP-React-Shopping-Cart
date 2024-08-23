import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

const createStore = () => {

const [itemsList, setItemsList] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://fakestoreapi.com/products", { mode: "cors" })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setItemsList(response))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
}, []);

return { itemsList, error, loading };
}

const Items = () => {
  const { itemsList, error, loading } = createStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="cardContainer">
      {itemsList.map((listItem) => 
        <Item key={listItem.title} product={listItem} />
      )}
    </div>
  );
};

export default Items;
