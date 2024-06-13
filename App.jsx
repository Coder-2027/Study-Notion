// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'


function App() {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div className="App">
      <nav>
        <Navbar setLoggedin = {setLoggedin} loggedin = {loggedin}></Navbar>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login setLoggedin = {setLoggedin}/>}></Route>
        <Route path = "/signup" element = {<Signup setLoggedin = {setLoggedin}/>}></Route>
          <Route path = "/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
