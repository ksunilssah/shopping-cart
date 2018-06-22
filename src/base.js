import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  /*  apiKey: "AIzaSyDqkcqdeiR2p5xTyli536hZ070Q_HSuTMg",
    authDomain: "shopping-cart-react.firebaseapp.com",
    databaseURL: "https://shopping-cart-react.firebaseio.com",*/
    /*   projectId: "shopping-cart-react",
       storageBucket: "shopping-cart-react.appspot.com",
       messagingSenderId: "191378510850"*/
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;