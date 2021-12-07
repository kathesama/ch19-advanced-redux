import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../redux/cart/cartSlice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react/destructuring-assignment
  const { id, title, quantity, total, price } = props.item;

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  const addItemHandler = () => {
    dispatch(
      addItem({
        id,
        title,
        quantity,
        total,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemPrice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={removeItemHandler}>
            -
          </button>
          <button type="button" onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
