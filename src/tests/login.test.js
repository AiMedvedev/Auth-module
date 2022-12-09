import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


describe('Login component', () => {
 test('should throw an error with wrong credentials', async () => {
   	let error = '';
	try {
		await signInWithEmailAndPassword(auth, 'nnn@nn.ru', '21111111');
	} catch (err) {
		error = err.toString();
	}
	expect(error).toEqual(
		'FirebaseError: Firebase: Error (auth/wrong-password).'
	);
 });

 test('should login with correct credentials', async () => {
   	let user = await signInWithEmailAndPassword(auth, 'nnn@nn.ru', '11111111');
	
	expect(user.user).toBeTruthy();
 });
});