
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnNCPjMfdWeF8-xwmHNMmhqIJs_8Gb8sI",
    authDomain: "puzzle-59f79.firebaseapp.com",
    projectId: "puzzle-59f79",
    storageBucket: "puzzle-59f79.appspot.com",
    messagingSenderId: "25889991484",
    appId: "1:25889991484:web:aaa5638229c6315c134c39",
    measurementId: "G-ZTS9V1TGCC"
  };

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);