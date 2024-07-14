import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyDD9McV6x5GK6dMFxb8TOW96ntMn5MKCNM",
	authDomain: "e-voting-app-c6168.firebaseapp.com",
	projectId: "e-voting-app-c6168",
	storageBucket: "e-voting-app-c6168.appspot.com",
	messagingSenderId: "1056845776776",
	appId: "1:1056845776776:web:ee068c92c52e3a43f01c3d"
}

const db = firebase.initializeApp(config);
export default db;