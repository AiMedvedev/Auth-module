import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {useAuth} from './components/Hooks/useAuth';
import {Header} from './components/Header/Header';
import {Modal} from './components/Modal/Modal';
import {Context} from './components/Functions/context';
import {firebaseConfig} from './firebase';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";

/* firebase.initializeApp(firebaseConfig); */

function App() {

  /* const auth = useAuth(firebase.auth); */

  return (
    //<Context.Provider value={{auth}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      //{ <Header className="App-header" {...auth} />
      //<main className="main">
     //   <Modal />
    //  </main> }
    //</Context.Provider>
  );
}

export default App;
