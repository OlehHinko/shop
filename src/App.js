import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

//components
import Login from "./components/login/index";
import ProductsList from "./components/products"

function App() {
  return (
      <BrowserRouter>
        <div className="layout">
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
