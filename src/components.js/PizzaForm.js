import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'


export default function PizzaForm (props){

    const {values, change, submit, disabled, errors} = props;

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className= 'Form container' onSubmit={onSubmit}>
        {/* <div className="errors">
         <div>{errors.name}</div>
         <div>{errors.slice}</div>
         
        </div> */}
           <div className = 'form-groups'>
               <label>
               Your Name:
               <input
               name='name'
               type= 'text'
               placeholder= 'Type Your Name Here'
               maxLength = '35'
               value= {values.name}
               onChange= {onChange}
               />
               </label>


               <label>
               Slice
               <select onChange={onChange} value={values.slice} name="slice">
                <option value="">- Select an option -</option>
                <option value="triangle">triangle</option>
                <option value="square">square</option>
                <option value="pie">pie</option>
               </select> 
               </label>

               <label>
               Pepperoni
               <input
               name='pepperoni'
               type= 'checkbox'
               checked= {values.pepperoni}
               onChange= {onChange}
               />
               </label>

               <label>
               Meatball
               <input
               name='meatball'
               type= 'checkbox'
               checked= {values.meatball}
               onChange= {onChange}
               />
               </label>

               <label>
               Onion
               <input
               name='onion'
               type= 'checkbox'
               checked= {values.onion}
               onChange= {onChange}
               />
               </label>
               <label>
               Chicken
               <input
               name='chicken'
               type= 'checkbox'
               checked= {values.chicken}
               onChange= {onChange}
               />
               </label>

                <label>
               Special Requests:
               <input
               name='specialReq'
               type= 'text'
               placeholder= 'Type Your Name Here'
               value = {values.terms}
               onChange= {onChange}
               />
               </label>

               <div className ='submit'>
               <button className ='submitButton'disabled={disabled}>submit</button>
               </div>
           </div>
       </form>
    )
}
