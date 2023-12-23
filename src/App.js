import Home from "./components/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <CartProvider className="text-green-500">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
