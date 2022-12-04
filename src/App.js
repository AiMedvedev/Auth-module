import './App.css';

/* import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBIcDPknkGxmwf4UZ44iv9J2SwsJc9Q68",
  authDomain: "auth-module-e9a14.firebaseapp.com",
  projectId: "auth-module-e9a14",
  storageBucket: "auth-module-e9a14.appspot.com",
  messagingSenderId: "614329792925",
  appId: "1:614329792925:web:247a105f7af8d60b305774"
};

const app = initializeApp(firebaseConfig); */

function App() {
  return (
    <>
      <header className="App-header">
        <div className="options">
          <div className="lang-choice"> Здесь будет выбор языка </div>
          <button className="login"> ВОЙТИ </button>
        </div>
      </header>
      <main className="main">
        <div className="modal"> Здесь будет модальное окно</div>
      </main>
    </>
  );
}

export default App;
