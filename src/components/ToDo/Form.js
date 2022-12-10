import React, { useState, useContext } from 'react';
import { AlertContext } from '../../contexts/alert/alertContext';
import { FirebaseContext } from '../../contexts/firebase/firebaseContext';

export const Form = () => {
	const [value, setValue] = useState('');
	const alert = useContext(AlertContext);
	const firebase = useContext(FirebaseContext);

	const submitHandler = (e) => {
		e.preventDefault();

		if (value.trim()) {
			firebase.addNote(value.trim())
				.then(() => alert.show(' Заметка была создана', 'success'))
				.catch(() => alert.show(' Заметка НЕ была создана', 'danger'));
			setValue('');
		} else {
			alert.show('Введите название заметки');
		}
	}

	return (
		<form className="form-group"  onSubmit={submitHandler}>
			<input 
				data-testid="todo-input"
				type="text" 
				className="form-control"
				placeholder='Введите название заметки'
				value={value}
				onChange={e => setValue(e.target.value)} />
		</form>
	)
}