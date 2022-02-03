import React, { SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {api} from './api/api'
import CustomerService from './service/customer-service'
import {User as nhass, User} from './model/user'
import authenticationApi from '../src/api/authentication-api';
import { Authentication } from './model/authentication';

  

// setActionPlanItens((state) =>({
//   ...state,
//   password: 'user', //evento ou values
//   email: 'user@localhost'
// }))

function App() {

  // const [actionPlanItens, setActionPlanItens] = useState<User>()

  const [actionPlanItens, setActionPlanItens] = useState<Authentication>()



  //ver onde o context cai aqui
  // setActionPlanItens((state) =>({
  //   ...state,
  //   login: 'dsafasdf' //evento ou values
  // }))




  // setState({
  //   ...state,
  //   [key]: value
  // });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    //aqui temos um problema se colocar fora da loop
    //aqui dentro nem sempre ele setta
    // setActionPlanItens(() =>({
    //   password: 'user', //evento ou values
    //   email: 'user@localhost'
    // }))
    // await new Promise(r => setTimeout(r, 2000));


  console.log(actionPlanItens)

  authenticationApi.login(actionPlanItens!)

  authenticationApi.login({password: 'user', email:'user@localhost'})





  // CustomerService.save();


  // console.log('fffooi')
  // await api.get('http://localhost:8080/api/force-users')
  }

  return (
    <div className="App">
   <form onSubmit={submit}>
        <input type="submit" className="In" value="Log In" >
        </input>
      </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
