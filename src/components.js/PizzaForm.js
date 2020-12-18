import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


export default function PizzaForm (props){
    
    const history = useHistory()

    const routeToSubmit = () => {
        history.push("/submitPage");}

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
            <div className="errors">
             <div>{errors.name}</div>
             <div>{errors.slice}</div>
            </div>
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
               Pizza Size
               <select onChange={onChange} value={values.psize} name="psize">
                <option value="">- Select an option -</option>
                <option value="12 inches">12 inches</option>
                <option value="16 inches">16 inches</option>
                <option value="20 inches">20 inches</option>
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
               checked={values.chicken}
               onChange= {onChange}
               />
               </label>

                <label>
               Special Requests:
               <input
               name='specialReq'
               type= 'text'
               placeholder= 'Special Requests here'
               value ={values.specialReq}
               onChange= {onChange}
               />
               </label>

               <div className ='submit'>
               <button 
                className ='submitButton'
               disabled={disabled}>submit</button>
               </div>
           </div>
       </form>
    )
}

// onClick={routeToSubmit}