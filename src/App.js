//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorMessage from "./components/layouts/ErrorMessage";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Profile from "./accounts/Profile";
import Header from "./components/layouts/Header"; 
import WithPrivateRoute from "./utils/WithPrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";


function App() {

  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route exact path="/" element={(<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-4xl">Welcome!</div>)} />
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