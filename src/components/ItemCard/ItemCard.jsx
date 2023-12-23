import React from "react";
import { useCart } from "react-use-cart";

export default function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <div className="flex justify-center">
      <div
        className="card border-3 border-black flex justify-center"
        style={{ width: "18rem" }}
      >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-green-500 font-bold text-2xl">
            {props.title}
          </h5>
          <h5>{props.price} сом</h5>
          <button onClick={() => addItem(props.item)} className="border-3 rounded-lg transition-all 
          text-white bg-green-500 bg-opacity-70 
          hover:bg-opacity-100 h-12 py-1">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
