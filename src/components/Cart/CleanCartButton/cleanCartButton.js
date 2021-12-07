import { useDispatch } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import { clearCart } from '../../../redux/cart/cartSlice';
import { toggle } from '../../../redux/ui/uiSlice';
import classes from './cleanCartButton.module.css';
// import trashIcon from '../../../assets/icons/trash-alt-regular.svg';

const CleanCartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(clearCart());
    dispatch(toggle());
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>
        <FiTrash2 />
      </span>
    </button>
  );
};

export default CleanCartButton;
