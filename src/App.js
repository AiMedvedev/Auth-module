//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/accounts/Register/Register";
import Login from "./components/accounts/Login/Login";
/* import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {useAuth, useLoggedIn} from './components/Hooks/useAuth';
import {Header} from './components/Header/Header';
import {Modal} from './components/Modal/Modal';
import {Context} from './components/Functions/context';
import {firebaseConfig} from './firebase'; */


//firebase.initializeApp(firebaseConfig);

function App() {
  //const auth = useAuth(firebase.auth);
  //const isLoggedIn = useLoggedIn(null);
  

  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


//<Context.Provider value={{auth, isLoggedIn}}>
  //    <Header className="App-header" {...auth} />
    //  <main className="main">
      //  {auth.authentication ?
        //<div> Здесь будет приложение</div>
        //:
        //<Modal />
       // }
      //</main>
    //</Context.Provider>