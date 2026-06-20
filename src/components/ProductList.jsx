import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7f",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4",
  },
  {
    id: 4,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 20,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
  },
  {
    id: 6,
    name: "Monstera",
    price: 25,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="product-list">
      <h1>Plant Products</h1>
      <div className="products">
        {products.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.category}</p>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addItem(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
