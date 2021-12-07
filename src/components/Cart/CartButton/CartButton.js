import { useDispatch, useSelector } from 'react-redux';

import { toggle } from '../../../redux/ui/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
