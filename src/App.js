//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorMessage from "./components/layouts/ErrorMessage";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Profile from "./accounts/Profile";
import Header from "./components/layouts/Header"; 
import WithPrivateRoute from "./utils/WithPrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
/* import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {useAuth, useLoggedIn} from './components/Hooks/useAuth';
import {Header} from './components/Header/Header';
import {Modal} from './components/Modal/Modal';
import {Context} from './components/Functions/context';
import {firebaseConfig} from './firebase'; */


function App() { 

  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;