import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDRfABA4yDFjOYYKOIV8faAlVlQXyNl1JQ",
  authDomain: "fabihogar-3b575.firebaseapp.com",
  projectId: "fabihogar-3b575",
  storageBucket: "fabihogar-3b575.appspot.com",
  messagingSenderId: "397377398630",
  appId: "1:397377398630:web:8c96f862e42886094a4aa7"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
