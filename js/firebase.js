
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, getDocs, collection, updateDoc, doc, getDoc, addDoc } from 'firebase/firestore/lite';
import { onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYlbWr6DzeiLihh77A14o9KFY7V6lNP_Y",
  authDomain: "opcudem-727f2.firebaseapp.com",
  projectId: "opcudem-727f2",
  storageBucket: "opcudem-727f2.appspot.com",
  messagingSenderId: "71571760540",
  appId: "1:71571760540:web:20285f7edf03522e3cd459"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const onGetEvent = (callback) =>
  onSnapshot(collection(db, "eventos"), callback);

export const updateEvento = (id, newFields) =>
updateDoc(doc(db, "eventos", id), newFields);

export const getEvento = (id) => getDoc(doc(db, "eventos", id));

export const saveEvento = (nombre, lugar, id, fecha, duracion, capacidad) =>
  addDoc(collection(db, "eventos"), { nombre, lugar, id, fecha, duracion, capacidad });