import {auth} from '../../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const validatePassword = () => {
  let isValid = true
  if (password !== '' && confirmPassword !== ''){
    if (password !== confirmPassword) {
      isValid = false
      setError('Passwords does not match')
    }
  }
  return isValid
}

const register = e => {
  e.preventDefault()
  setError('')
  if(validatePassword()) {
    // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          console.log(res.user)
        })
      .catch(err => setError(err.message))
  }
  setEmail('')
  setPassword('')
  setConfirmPassword('')
}

