import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import Layout from './components/Layout/Layout';
import { sendCartData } from './redux/cart/cart.actions';
import NotificationComponent from './components/UI/Notification/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartIsVisible = useSelector((state) => state.ui.cartIsVisible);

  /* Si queremos guardar un snapshot del store en una BD pudiéramos hacerlo acá, así el
  código se mantiene limpio y se deja toda la lógica donde va, para ello el código sería: */
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  /* De esta manera cada cambio que exista en el store se dispara el useEffect y se registra en la DB
   */

  return (
    <>
      {notification && (
        <NotificationComponent status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {isCartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
