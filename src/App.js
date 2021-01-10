import logo from './logo.svg';
import './App.css';
import Country from './Component/Country/Country';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Component/CountryDetails/CountryDetails';
import NoMatch from './Component/NoMatch/NoMatch';


function App() {

   

  return (
    
    <Router >
     <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
           <Route path="/country/:countryAlpha3Code">
             <CountryDetails></CountryDetails>

           </Route>
           
                <Route exact path="/">
              <Home></Home>
          </Route>
                <Route path="*">
                <NoMatch></NoMatch>
               
        </Route>
               
     </Switch>
      
    





    </Router>
  );
}

export default App;
