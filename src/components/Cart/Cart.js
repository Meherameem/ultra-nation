import React from 'react';

const styleColor = {
    color:'white'
}

const Cart = (props) => {
    //const [name,population,] = props.cart;
    return (
        <div style={{border: '5px solid orange', borderRadius:'10px',backgroundColor:'black'}}>
            <h2 style={styleColor}>This is :  {props.cart.name}</h2>
            <h3 style={styleColor}>Total Population : {props.cart.population}</h3>
            <h4 style={styleColor}>The Capital of {props.cart.name} is : {props.cart.capital}</h4>
        </div>
    );
};

export default Cart;