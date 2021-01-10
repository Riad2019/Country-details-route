import React from 'react';
import { Link } from 'react-router-dom';


const Country = (props) => {
    const {name , alpha3Code} = props.country
   
    return (
        <div>
            <h4>Name : {name}</h4>
            <Link to={`/country/${alpha3Code}`}> 
             <button>Click Here for Country Details</button>
             </Link>
           
            
        </div>
    );
};

export default Country;