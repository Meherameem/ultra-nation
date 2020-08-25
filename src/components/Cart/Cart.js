import React from 'react';


const Cart = (props) => {
    //const [name,population,] = props.cart;
    return (
        <div>
            <h2>This is :  {props.cart.name}</h2>
            <h3>Total Population : {props.cart.population}</h3>
            <h4>The Capital of {props.cart.name} is : {props.cart.capital}</h4>
        </div>
    );
};

export default Cart;