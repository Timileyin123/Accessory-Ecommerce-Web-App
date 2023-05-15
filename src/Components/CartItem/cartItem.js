import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../Icons/Icons";
import "./CartItem.css";
import { decrease, increase, removeItem } from "../Store/Slice/cartSlice";

const CartItem = ({ id, img, title, amount, price }) => {
  const dispatch = useDispatch();

  const handleOnclickRemove = () => {
    dispatch(removeItem({ id }));
  };
  const handleIncreaseButton = () => {
    dispatch(increase({ id }));
  };
  const handleDecreaseButton = () => {
    if (amount === 1) {
      dispatch(removeItem({ id }));
      return;
    }
    dispatch(decrease({ id }));
  };
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={handleOnclickRemove} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncreaseButton}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecreaseButton}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
