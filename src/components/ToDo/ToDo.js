import React, { useContext, useEffect } from 'react';
import { Form } from './Form';
import { Loader } from './Loader';
import { Notes } from './Notes';
import { FirebaseContext } from '../../contexts/firebase/firebaseContext';


export const ToDo = () => {
	const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
	
	useEffect(() => {
		fetchNotes();
		//eslint-disable-next-line
	}, [])

	return (
		<>
			<Form />

			<hr/>

			{loading ? <Loader/> : <Notes data-testid='todo-list' notes={notes} onRemove={removeNote}/>}
		</>
	)
}