import React, {useEffect, useState}from "react";
import {Route, Link, Switch} from 'react-router-dom'
import Homepage from './components.js/Homepage'
import PizzaForm from './components.js/PizzaForm'
import * as yup from "yup";
import axios from 'axios'; 
import schema from "./validation.js/schema"
import Form from "./components.js/Form"

// function FetchStock(){
// return Promise.resolve({success: true, []});
// }

const initialFormValues ={
  name: '',
  //dropdown
  psize: '',
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

const App = () => {

    const [pizza, setPizza] = useState(initialPizza);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors]=useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const inputChange = (name, value) => {

      yup
      .reach(schema,name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors,[name]:''})
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const formSubmit = () => {

    axios
    .post('https://reqres.in/api/users', formValues)
    .then((res) => {
      setFormValues(initialFormValues)
      console.log('this resData in my .post', res.data)
    })
    .catch((err) => {
        console.log(err);
      });
    
    const newUser = {
    name : formValues.name.trim(),
    psize: formValues.psize.trim(),
    specialReq:formValues.specialReq.trim(),
    toppings: ["pepperoni", "meatball", "onion","chicken"].filter(
      (toppings) => formValues[toppings]
    )
    }
    setPizza([...pizza,newUser])
    console.log('this is forms in form submit',pizza)
    }

    useEffect(() => {
      schema.isValid(formValues).then((valid) => {
        setDisabled(!valid)
      })
    }, [formValues])

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
      <PizzaForm 
       values ={formValues}
       change ={inputChange}
       submit ={formSubmit}
       disabled ={disabled}
       errors ={formErrors}/>
      </Route>
    <Route exact path ={"/"}>
      <Homepage />
    </Route>
  </Switch>

  {pizza.map((customer) => {
        return <Form key={customer.id} details={customer} />;
      })}
  </div>
    );
};
export default App;
