import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWlEgwmJ6E5jVLOcjY3X0aP3DRKu4i0sk",
    authDomain: "chat-app-5bf59.firebaseapp.com",
    databaseURL: "https://chat-app-5bf59.firebaseio.com",
    projectId: "chat-app-5bf59",
    storageBucket: "chat-app-5bf59.appspot.com",
    messagingSenderId: "741027675097",
    appId: "1:741027675097:web:4709e3b99527cd5d1477c8",
    measurementId: "G-YE4HDF9VBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;