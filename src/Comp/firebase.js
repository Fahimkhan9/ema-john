import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDTX-JWuv84qAm7uHJOffRpNjOwuQLbZdA",
  authDomain: "my-shop-6244d.firebaseapp.com",
  databaseURL: "https://my-shop-6244d.firebaseio.com",
  projectId: "my-shop-6244d",
  storageBucket: "my-shop-6244d.appspot.com",
  messagingSenderId: "442871076579",
  appId: "1:442871076579:web:cc0e3251fc8862549297d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider()
export {providerGoogle,providerFacebook }
export default auth