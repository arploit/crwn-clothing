import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB5FTKZELYVLgXkBasqf63bddeXTF3qqOg',
	authDomain: 'crown-db-a3194.firebaseapp.com',
	projectId: 'crown-db-a3194',
	storageBucket: 'crown-db-a3194.appspot.com',
	messagingSenderId: '870034521201',
	appId: '1:870034521201:web:401f46a468faf830566fd0',
	measurementId: 'G-43C3S62HCP',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
