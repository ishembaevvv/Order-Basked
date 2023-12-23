import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import data from "../../data";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div> 
      <h1 className="text-center mt-3 font-bold text-3xl">Все товоры</h1>
      <section className="py-4 container">
        <div className="grid grid-cols-3 gap-2">
          {data.products.map((el, id) => {
            return (
              <ItemCard
                item={el}
                key={id}
                img={el.img}
                title={el.title}
                price={el.price}
              />
            );
          })}
        </div>
      </section>
      <div
        className="position-absolute right-10 border-3 rounded-lg
            transition-all text-white bg-green-500 bg-opacity-70 
            hover:bg-opacity-100 h-11 w-20 
            flex items-center justify-center py-1"
      >
        <Link to="/cart">Далее</Link>
      </div>
    </div>
  );
}
