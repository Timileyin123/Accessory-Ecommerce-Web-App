import { useDispatch } from "react-redux";
import { closeModal } from "../Store/Slice/modalSlice";
import { clearCart } from "../Store/Slice/cartSlice";
import "./Modal.css";
const Modal = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Return all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            onClick={handleClearCart}
            className="btn confirm-btn"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="btn clear-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
