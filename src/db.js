import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyDhJqeeX8EpXljo1v5vo-Ia29aIdjTPdKs",
	authDomain: "firevuechat-3ac27.firebaseapp.com",
	projectId: "firevuechat-3ac27",
	storageBucket: "firevuechat-3ac27.appspot.com",
	messagingSenderId: "425190580286",
	appId: "1:425190580286:web:f7eec6ed3d44b171b4f16f"
}

const db = firebase.initializeApp(config);
export default db;