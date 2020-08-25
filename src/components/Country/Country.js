import React from 'react';

const Country = (props) => {
    const {name,population, region ,flag} = props.country;
    const flagStyle = {height:'50px'};
    const btnStyle = {marginBottom:'50px', border:'none'};
    const countryClicked = props.countryClicked;
    return (
        <div>
            <button style={btnStyle} onClick={() => countryClicked(props.country)}><img style={flagStyle} src={flag} alt=""/></button>
            
        </div>
    );
};

export default Country;