import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  // eslint-disable-next-line array-callback-return
  const cartContent = items.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.totalPrice,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartContent}</ul>
    </Card>
  );
};

export default Cart;
