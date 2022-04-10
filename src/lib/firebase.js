import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyAWZodMZhsEE7XRYrp3yaTK0cqXyLpXRO8",
    authDomain: "netflix-6cfea.firebaseapp.com",
    projectId: "netflix-6cfea",
    storageBucket: "netflix-6cfea.appspot.com",
    messagingSenderId: "666843583687",
    appId: "1:666843583687:web:a1cc18f61a5a98ef07dae2"
}
const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
export { firebase }