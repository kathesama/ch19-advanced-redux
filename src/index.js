import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

import App from './App';
import store from './redux/store';
import './index.css';

// eslint-disable-next-line
let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
