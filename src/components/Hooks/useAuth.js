

export const useGoggleAuth = (authFirebase) => {
	
	const auth = authFirebase();

	const provider = new authFirebase.GoogleAuthProvider();

	const logIn = () => auth.signInWithPopup(provider);


	return {
		logIn
	}
}