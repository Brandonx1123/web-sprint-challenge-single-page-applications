import React from 'react';
import {useHistory} from 'react-router-dom'


export default function Home(){

    const history = useHistory()

    const routeToForm = () => {
        history.push("/PizzaForm");
    }

        return (
           <div className ='Home Wrapper'>
               <img
        className="home-image"
        src="https://unsplash.com/photos/MQUqbmszGGM"
        alt=""
            />
            <button onClick={routeToForm} className="ButtonToForm">
            Order</button>
           </div> 
         )
    }
