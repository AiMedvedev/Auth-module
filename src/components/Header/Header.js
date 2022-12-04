import React, {useContext} from 'react';
import {Context} from '../Functions/context.js';
import './header.css';

export const Header = () => {
	const {auth: {authentication, logIn, logOut}} = useContext(Context);

	return ( 
	<header className = "App-header">
		<div className = "options">
			<div className = "lang-choice"> Здесь будет выбор языка </div> 
			{authentication ? 
			<button className = "logOut" onClick = {logOut}> ВЫЙТИ </button>
			:
			<button className = "logIn" onClick = {logIn}> ВОЙТИ </button> 
			}
		</div> 
	</header>
	)
};