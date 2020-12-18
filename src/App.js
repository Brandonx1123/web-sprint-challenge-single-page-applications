import React, {useEffect, useState}from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Homepage from './components.js/Homepage'
import PizzaForm from './components.js/PizzaForm'

const App = () => {

  const initialFormValues ={
    name: '',
    //dropdown
    slice: '',
    //checkboxes for topping
    pepperoni: false,
    meatball:false,
    onion:false,
    chicken:false,
    //special request input
    specialReq: '',
  }

  const initialFormErrors = {
    name: '',
    slice: '',
    specialReq: '',
    }

    const initialPizza = [];
    const initialDisabled = true;

    const [pizza, setPizza] = useState(initialPizza);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormsErrors] =useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    

  return (
<div className="App">
      <nav>
        <h1 className="store-header">Brandon's Pizza Shop</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/PizzaForm">Order</Link>
        </div>
      </nav>

    <Switch>
      <Route path={'/PizzaForm'}>
      <PizzaForm/>
      </Route>
    <Route exact path ={"/"}>
      <Homepage />
    </Route>
  </Switch>
  </div>
    );
};
export default App;
