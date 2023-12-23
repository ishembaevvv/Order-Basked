import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <h1 className="text-green-600 text-9xl flex justify-center items-center h-screen">
        Карзина пуста!
      </h1>
    );

  return (
    <div className="py-4 container flex flex-col items-center">
      <h5 className="text-green-700">
        ({totalUniqueItems}) ({totalItems})
      </h5>
      <table className="text-white grid grid-cols-1">
        {items.map((item, id) => {
          return (
            <tr
              key={id}
              className="bg-green-500 hover:bg-green-600 hover:scale-105 grid items-center text-2xl grid-cols-5 border-2 rounded-md"
            >
              <td>
                <img src={item.img} className="h-24" alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.price} сом</td>
              <td>({item.quantity})</td>
              <td className="grid grid-cols-3">
                <button
                  className="border-1 rounded-lg h-11 hover:bg-white hover:text-green-600 transition-colors"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="border-1 rounded-lg h-11 hover:bg-white hover:text-green-600 transition-colors"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="border-1 rounded-lg h-11 hover:bg-white hover:text-green-600 transition-colors"
                  onClick={() => removeItem(item.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <div>
        <h2 className=" border-2 border-green-600 bg-green-500 text-white h-11 w-52 mt-6 justify-center flex items-center rounded-lg ">
          Общая сумма: {cartTotal} сом
        </h2>
      </div>

      <div>
        <button onClick={() => emptyCart()}>Удалить все</button>
      </div>
      <div className="position-absolute left-10 bottom-10 border-3 rounded-lg 
      transition-all text-white bg-green-500 bg-opacity-70 hover:bg-opacity-100 
      h-11 w-20 flex items-center justify-center py-1">
        <Link to="/">Назад</Link>
      </div>
    </div>
  );
}
