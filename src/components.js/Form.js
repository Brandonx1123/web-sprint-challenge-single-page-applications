import React from 'react'


export default function Form (props) {

    const {details} =props

   
    
        return (
        <div className ='UserCard'>
        <p> Your name:{details.name}</p>
        <p>Pizza size:{details.psize}</p>
        <div> Toppings:
            {
            details.toppings.map((newPizza) => {
                return (
                    <p> {newPizza} </p>
                )
            })
        }
        </div>
        <p>Any Special requests:{details.specialReq} </p>
        </div>
        )
}