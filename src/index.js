import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//=============================
import reportWebVitals from './reportWebVitals';
import { Route, Link, HashRouter } from 'react-router-dom';
import {UserContext} from './context';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import AllData from './components/alldata.js';
import Login from './components/login.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';
import Balance from './components/balance.js';

function App() {
  console.log('render');
  return (
    <HashRouter>
      <Navbar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
      {/* const UserContext = React.createContext(); */}
        <Route path= "/" exact component={Home} />
        <Route path= "/alldata" exact component={AllData} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <h1>Lets Code</h1>
      </UserContext.Provider>
    </HashRouter>

  );
}




//=================================================================
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
