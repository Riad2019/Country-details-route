import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([])
   
    useEffect(()=>{
      const url ='https://restcountries.eu/rest/v2/all'
       fetch(url)
       .then(res => res.json())
       .then(data => setCountry(data))
       console.log(country);
      
 
    },[])
    return (
        <div>
            <h4>Total Country :{country.length}</h4>
            {
                country.map(country =><Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;