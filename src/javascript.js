import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBmQqN-UkEv3kH_4utADeTfwg_G5CqstT8",
  authDomain: "form-contact-85ed7.firebaseapp.com",
  projectId: "form-contact-85ed7",
  storageBucket: "form-contact-85ed7.appspot.com",
  messagingSenderId: "961791143059",
  appId: "1:961791143059:web:93cf1fc272c8e37b77f166",
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);







//
//
// const app = initializeApp(firebaseConfig);
//
// let database = app.database();
// let ref = database.ref('SubmittedInfo');

// collection

const formDoc = document.getElementById('form');

formDoc.addEventListener('submit', function (event) {
  event.preventDefault();

  //Values
  let inputName = document.getElementById('name').value;
  let inputEmail = document.getElementById('email').value;
  let inputCompany = document.getElementById('company').value;
  let inputComment = document.getElementById('comment').value;

  saveInfo(inputName, inputEmail, inputCompany, inputComment);

  console.log(inputName, inputEmail, inputCompany);
});

// store infos to firebase

function saveInfo(inputName, inputEmail, inputCompany, inputComment) {
  let newSaveInfo = ref.push();

  newSaveInfo.set({
    name: inputName,
    email: inputEmail,
    company: inputCompany,
    message: inputMessage,
  });
}
