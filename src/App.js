import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import {
  calculateTotals,
  getCartItems,
} from "./Components/Store/Slice/cartSlice";
import CartContainer from "./Components/CartContainer/CartContainer";
import Modal from "./Components/Modal/Modal";
import "./App.css";
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
