import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const CountryDetails = () => {
    const {countryAlpha3Code} =useParams();

    
    const [country, setCountry] = useState([])
   
    useEffect(()=>{
      const url =`https://restcountries.eu/rest/v2/alpha/${countryAlpha3Code}`
       fetch(url)
       .then(res => res.json())
       .then(data => setCountry(data))
       console.log(country);
      
 
    },[])
    return (
        <div>
            <h1>Name : {country.name}</h1>
            <p> Alpha Code: {countryAlpha3Code} </p>
            <p> Phone Code : {country.callingCodes}</p>
            <p> Capital : {country.capital}</p>
            <p>Region : {country.region}</p>
            <p>Subregion : {country.subregion}</p>
            <p>Population : {country.population}</p>
            <p>Timezone : {country.timezones}</p>
           
            <img src={country.flag} alt=""/>

            
        </div>
    );
};

export default CountryDetails;