import firebase from 'firebase/app'
import 'firebase/firebase-database'

const oDB = firebase.initializeApp({
    databaseURL: "https://demoapp-8eb67.firebaseio.com",
}).database();

export const oTodosinDB = oDB.ref('todos');