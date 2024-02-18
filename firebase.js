import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, query, where, addDoc, getDocs, collection, updateDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClzK40A_L5H1ZrKCq8rC5GtDks1ST1v7A",
  authDomain: "mycommerce-9fab9.firebaseapp.com",
  projectId: "mycommerce-9fab9",
  storageBucket: "mycommerce-9fab9.appspot.com",
  messagingSenderId: "985686771142",
  appId: "1:985686771142:web:21924e798d02a089539ec7",
  measurementId: "G-BKP9LCKXHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const sentError = {
  hasError: false,
  errorCode: ""
};

//const auth = getAuth();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



const handleSingUp = (email, password) => {

  console.log(`${email} ----- ${password}`);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const handleSingIn = (email, password) => {

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(`${email} -- login`)
    return true;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


// Add item

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function setItem(itemTitle, itemAmount, itemPrice, itemDescription){

  try {
      const docRef = await addDoc(collection(db, "items"), {
        
        title: itemTitle,
        amount: itemAmount,
        total: 1,
        price: itemPrice,
        description: itemDescription,
        selected: Boolean(false),
        selectIcon: " "

      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

}

// Update Item

async function updateItem(itemId, itemTitle, itemAmount, itemPrice, itemDescription){

  const itemsRef = doc(db, "items", itemId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(itemsRef, {
      title: itemTitle,
      amount: itemAmount,
      price: itemPrice,
      description: itemDescription,
  });

}

// send sell


async function setSell(sellSummary, sellTotalPrice){

  try {
      const docRef = await addDoc(collection(db, "sells"), {
        
        buyTime: new Date().toLocaleString(),
        summary: sellSummary,
        totalPrice: sellTotalPrice, 

      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

}

// update stock

async function updateStock(itemId, amountUpdated){

  const itemsRef = doc(db, "items", itemId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(itemsRef, {
      amount: amountUpdated,
  });

}


export { auth, handleSingUp, handleSingIn, setItem, updateItem, updateStock, sentError, setSell, db };