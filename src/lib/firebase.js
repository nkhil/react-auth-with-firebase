import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpR-bNTn4OFkmiah8xC59dgCu0xrR46l0",
  authDomain: "pineapple-5242b.firebaseapp.com",
  databaseURL: "https://pineapple-5242b.firebaseio.com",
  projectId: "pineapple-5242b",
  storageBucket: "pineapple-5242b.appspot.com",
  messagingSenderId: "483372132321",
  appId: "1:483372132321:web:db3511afed0bb85c5114a0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;