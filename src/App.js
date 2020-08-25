import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries,setCountries] = useState([])
  const [cart,setCart] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const countryName = data.map(country => country.name)
    })
      
  },[])
    //.catch(error => console.log(error))

    const countryClicked = (country) =>{
      const newCart = country;
      setCart(newCart);
  }

  return (
    <div className="App">
      <h1>country loaded : {countries.length}</h1>
      <div>
        <Cart cart={cart}></Cart>
      </div>
      <ul>
        {countries.map(country => <Country country={country} countryClicked={countryClicked} key={country.alpha3Code}></Country>)}
      </ul>
      
    </div>
  );
}

export default App;
