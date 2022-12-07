//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorMessage from "./components/layouts/ErrorMessage";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Profile from "./accounts/Profile";
import {ToDo} from "./components/ToDo/ToDo";
import Header from "./components/layouts/Header"; 
import WithPrivateRoute from "./utils/WithPrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { Alert } from './components/ToDo/Alert';
import { AlertState } from './contexts/alert/AlertState';
import { FirebaseState } from './contexts/firebase/FirebaseState';


function App() {
  

  return (
    <FirebaseState>
      <AlertState>
        <AuthProvider>
          <Router>
            <Header />
            <ErrorMessage />
            <div className="container pt-4">
              <Alert />
              <Routes>
                <Route exact path="/" element={<ToDo />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/profile"
                  element={
                    <WithPrivateRoute>
                      <Profile />
                    </WithPrivateRoute>
                  }
                />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </AlertState>
    </FirebaseState>
  );
}

export default App;