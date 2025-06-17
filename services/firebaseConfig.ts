import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXK0IlgeaCrxt3i3FE-8KuHvfko9habN0",
    authDomain: "teker2.firebaseapp.com",
    projectId: "teker2",
    storageBucket: "teker2.firebasestorage.app",
    messagingSenderId: "898734644201",
    appId: "1:898734644201:web:d9ce795a4a0d7cd4540978",
};


export { auth, firestore as db, storage };