import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from "./components/Cart";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div className="app">
                  <Routes>
                      <Route path="/" element={<Cart />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;