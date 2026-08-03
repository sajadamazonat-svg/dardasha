// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { 
    getAnalytics 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";


// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyBnIOtWIuqk1KYSMMjzyBz3NJwXIYj02Fw",

    authDomain: "tttes-aba44.firebaseapp.com",

    databaseURL: "https://tttes-aba44-default-rtdb.firebaseio.com",

    projectId: "tttes-aba44",

    storageBucket: "tttes-aba44.firebasestorage.app",

    messagingSenderId: "519435609331",

    appId: "1:519435609331:web:88f5472347e636853e8386",

    measurementId: "G-XJX61P6ZV2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Analytics

const analytics = getAnalytics(app);


// Firebase Services

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// Export Services

export {
    app,
    analytics,
    auth,
    db,
    storage
};