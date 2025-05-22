import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from "./components/Cart";

function App() {
  return (
      <Provider store={store}>
        <div className="app">
          <h1>Корзина покупок</h1>
          <Cart />
        </div>
      </Provider>
  );
}

export default App;