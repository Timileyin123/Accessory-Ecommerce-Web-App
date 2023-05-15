import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/cartItem";
import "./CartContainer.css";
import { openModal } from "../Store/Slice/modalSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal());
  };

  if (amount < 1) {
    return (
      <div className="cart">
        <header>
          <h3>Accessories is Empty</h3>
        </header>
      </div>
    );
  }

  return (
    <div className="cart">
      <header>
        <h3>ACCESSORIES</h3>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={handleModal} className="btn clear-btn">
          Clear Cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;
