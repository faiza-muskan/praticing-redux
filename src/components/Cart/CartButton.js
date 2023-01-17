import { useDispatch, useSelector } from "react-redux";
import { myCartAction } from "../../store/myCart-store";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartQuatity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(myCartAction.toggle());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuatity}</span>
    </button>
  );
};

export default CartButton;
