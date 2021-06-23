import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, HashRouter } from 'react-router-dom';
import {UserContext} from './context';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import AllData from './components/alldata.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';

// Create App component this is the main component of the BadBank application.
function App() {
//  console.log('render App');
  return (
//Create routing to all components.
    <HashRouter>
      <Navbar/>
{/* Create a context provider and a users array to share data in the components. */}
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <Route path= "/" exact component={Home} />
        <Route path= "/alldata" exact component={AllData} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
      </UserContext.Provider>
    </HashRouter>
  );
}

//=================================================================
//Rendering the app.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
