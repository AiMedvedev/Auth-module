import React, { useReducer } from "react";
import axios from 'axios';
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types';
import { auth } from '../../firebase';


const url = 'https://auth-module-e9a14-default-rtdb.firebaseio.com/';


export const FirebaseState = ({children}) => {

	const initialState = {
		notes: [],
		loading: false
	}

	const [state, dispatch] = useReducer(firebaseReducer, initialState);
	
	const showLoader = () => dispatch({type: SHOW_LOADER});

	const fetchNotes = async () => {

		const res = await axios.get(`${url}/${auth.currentUser.uid}.json`);

		if (res.data === null) {
			return;
		} else {
			showLoader();
			const notes = await axios.get(`${url}/${auth.currentUser.uid}/notes.json`);
			const payload = Object.keys(notes.data).map(key => {
				
			return {
				...notes.data[key],
				id: key
			}});
			
			dispatch({type: FETCH_NOTES, payload});
		}
	}	


	const addNote = async title => {
		const note = {
			title,
			date: new Date().toJSON()
		}

		try {
			const res = await axios.post(`${url}/${auth.currentUser.uid}/notes.json`, note);

			const payload = {
				...note,
				id: res.data.name
			}

			dispatch({type: ADD_NOTE, payload});
		} catch (e) {
			throw new Error(e.message);
		}
	}

	const removeNote = async id => {
	
		await axios.delete(`${url}/${auth.currentUser.uid}/notes/${id}.json`);

		dispatch({
			type: REMOVE_NOTE,
			payload: id
		})
	}

	return (
		<FirebaseContext.Provider value={{
			showLoader, addNote, removeNote, fetchNotes,
			loading: state.loading,
			notes: state.notes
		}}>
			{children}
		</FirebaseContext.Provider>
	)
}