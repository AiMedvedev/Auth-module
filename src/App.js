import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {useAuth} from './components/Hooks/useAuth';
import {Header} from './components/Header/Header';
import {Context, firebaseConfig} from './components/Functions/context';


firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  return (
    <Context.Provider value={{auth}}>
      <Header className="App-header" {...auth} />
      <main className="main">
        <div className="modal"> Здесь будет модальное окно</div>
      </main>
    </Context.Provider>
  );
}

export default App;
