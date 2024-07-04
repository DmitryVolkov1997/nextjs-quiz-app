import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAPSQ3wjHNztTTRev3FlPsWZ05YMwGMxGA",
    authDomain: "quiz-portfolio-c8986.firebaseapp.com",
    databaseURL: "https://quiz-portfolio-c8986-default-rtdb.firebaseio.com",
    projectId: "quiz-portfolio-c8986",
    storageBucket: "quiz-portfolio-c8986.appspot.com",
    messagingSenderId: "88207139020",
    appId: "1:88207139020:web:16609b1fa9c22b77d5e269"
}

const app = initializeApp(firebaseConfig)
export default app
