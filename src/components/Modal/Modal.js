import React, {useContext, useState} from "react";
import {Context} from '../Functions/context.js';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import "./modal.css";


/* async function authenticateUser(email, password, isLogin) {
  try {
    const user = isLogin
      ? await auth.signInWithEmailAndPassword(email, password)
      : await auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
} */
 

export const Modal = () => {

	const {auth: {logIn}} = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
		
	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage)
		});
		
	}

    return (
      <div className="modal">
        <p className="formTitle">Авторизация</p>
        <form className="form" onSubmit={onLogin}>
          <div className="input-group">
            <label htmlFor="email-address">Email</label>
            <input 
			type="email" 
			name="email" 
			id="email-address" 
			required                                                                                
            placeholder="Введите Ваш Email"
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input 
			type="password" 
			name="password" 
			id="password" 
			required                                                                                
            placeholder="Введите Ваш пароль"
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className="primary" /* onClick={onLogin} */>Войти</button>
        </form>
        <button className="secondary" onClick={logIn}>
          Войти с аккаунта Google
        </button>
      </div>
    );
}