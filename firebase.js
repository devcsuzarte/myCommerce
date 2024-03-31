import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, query, where, addDoc, getDocs, collection, updateDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';

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



const signInError = (getErroCode) => {

  switch (getErroCode) {

    case "auth/invalid-credential":
    case "auth/invalid-email":

      Alert.alert('Erro ao fazer login', "E-mail ou senha incorretos", [
        {
          text: 'Ok',
          onPress: () => console.log('Ok'),
        },
      ]);
      break;

      case "auth/network-request-failed":

          Alert.alert('Erro ao fazer login', "Verifique sua conexão com a internet", [
            {
              text: 'Ok',
              onPress: () => console.log('Ok'),
            },
          ]);
          break;

      default:
        Alert.alert('Erro ao fazer login', getErroCode, [
          {
            text: 'Ok',
            onPress: () => console.log('Ok'),
          },
        ]);
          break;

  }
}


    

const signUpError = (getErroCode) =>
  {

    let erroTitle = "Erro ao fazer cadastro"
    
    switch (getErroCode) {
      
      case "auth/invalid-email":
  
        Alert.alert(erroTitle, "E-mail inválido", [
          {
            text: 'Ok',
            onPress: () => console.log('Ok'),
          },
        ]);
        break;

        case "auth/weak-password":
  
        Alert.alert(erroTitle, "Senha fraca", [
          {
            text: 'Ok',
            onPress: () => console.log('Ok'),
          },
        ]);
        break;

        case "auth/email-already-in-use":
  
        Alert.alert(erroTitle, "E-mail já cadastrado", [
          {
            text: 'Ok',
            onPress: () => console.log('Ok'),
          },
        ]);
        break;
  
        case "auth/network-request-failed":
  
            Alert.alert(erroTitle, "Verifique sua conexão com a internet", [
              {
                text: 'Ok',
                onPress: () => console.log('Ok'),
              },
            ]);
            break;
  
        default:
          Alert.alert(erroTitle, "Tente novamente", [
            {
              text: 'Ok',
              onPress: () => console.log('Ok'),
            },
          ]);
            break;
  
    }

    }
  
  
    

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const sentError = {
  hasError: false,
  errorCode: ""
};

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//const auth = getAuth();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



const handleSingUp = (email, password, commerce, name) => {

  console.log(`${email} ----- ${password}`);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setUser(name, commerce, email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    signUpError(errorCode)
    console.log(errorCode)
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
    
    signInError(errorCode);
    console.log(errorCode)
  });
}

// Add User on data base

async function setUser(userName, commerceName, userEmail) {

    try {
      const docRef = await addDoc(collection(db, "users"), {

        userName: userName,
        commerceName: commerceName,
        userEmail: userEmail,

      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {

        console.error("Error adding document: ", e);
      
    }
}



// Add item



async function setItem(itemTitle, itemAmount, itemPrice, itemDescription, dbItemID){

  try {
      const docRef = await addDoc(collection(db, dbItemID), {
        
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

async function updateItem(itemId, itemTitle, itemAmount, itemPrice, itemDescription, dbItemID){

  const itemsRef = doc(db, dbItemID, itemId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(itemsRef, {
      title: itemTitle,
      amount: itemAmount,
      price: itemPrice,
      description: itemDescription,
  });

}

// send sell


async function setSell(sellSummary, sellTotalPrice, dbSellsID){

  try {
      const docRef = await addDoc(collection(db, dbSellsID), {
        
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

async function updateStock(itemId, dbItemsID, amountUpdated){

  const itemsRef = doc(db, dbItemsID, itemId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(itemsRef, {
      amount: amountUpdated,
  });

}



export { auth, handleSingUp, handleSingIn, setItem, setUser, updateItem, updateStock, sentError, setSell, db };