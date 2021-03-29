import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCc63NYndwNSxBfWxjCtC4TQQvaug7MhAI",
    authDomain: "crwn-db-d4a59.firebaseapp.com",
    projectId: "crwn-db-d4a59",
    storageBucket: "crwn-db-d4a59.appspot.com",
    messagingSenderId: "490073280621",
    appId: "1:490073280621:web:5acb67b63a702f22a86f64",
    measurementId: "G-ZZXQK5MN4W"
};

export const createUserProfileDocument = async (userAuth, additinalData) => {

    if (! userAuth) {
        return;
    }
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (! snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additinalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;