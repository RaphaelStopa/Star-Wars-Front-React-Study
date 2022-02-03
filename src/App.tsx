import React, { SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {api} from './api/api'
import CustomerService from './service/customer-service'
import {User as nhass, User} from './model/user'



function App() {

  const [actionPlanItens, setActionPlanItens] = useState<User>()

  //ver onde o context cai aqui
  setActionPlanItens((state) =>({
    ...state,
    login: 'dsafasdf' //evento ou values
  }))

  // setState({
  //   ...state,
  //   [key]: value
  // });

  const submit = async (e: SyntheticEvent) => {
  e.preventDefault();





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
