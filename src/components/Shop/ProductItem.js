import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import { addItem } from '../../redux/cart/cartSlice';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
