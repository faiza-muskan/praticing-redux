import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, total, price, quantity, id } = props.item;

  const removeItemsHandler = () => {
    dispatch(cartAction.removeItemsFromCart(id));
  };

  const addIteamsHandler = () => {
    dispatch(
      cartAction.addItemsToCart({
        id,
        price,
        title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemsHandler}>-</button>
          <button onClick={addIteamsHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
