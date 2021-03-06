// Actions
import { showNotification } from '../ui/uiSlice';
import { replaceCart } from './cartSlice';

const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch('https://react-api-k-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }
  };

  try {
    await sendRequest();

    dispatch(
      showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }
};

const fetchCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json');

    if (!response.ok) {
      throw new Error('Could not fetch cart data!');
    }

    const data = await response.json();

    return data;
  };

  try {
    const cartData = await fetchData();
    dispatch(
      replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      })
    );
  }
};

export { sendCartData, fetchCartData };
