import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyACxZ6S984OTrWBujG3z-cSZce_BTc-zj0",
  authDomain: "insurance-b97cc.firebaseapp.com",
  databaseURL: "https://insurance-b97cc.firebaseio.com",
  projectId: "insurance-b97cc",
  storageBucket: "",
  messagingSenderId: "333129239499",
};

const devConfig = {
  apiKey: "AIzaSyACxZ6S984OTrWBujG3z-cSZce_BTc-zj0",
  authDomain: "insurance-b97cc.firebaseapp.com",
  databaseURL: "https://insurance-b97cc.firebaseio.com",
  projectId: "insurance-b97cc",
  storageBucket: "",
  messagingSenderId: "333129239499",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
