import * as firebase from 'firebase';


//TEMP_IMPORT, DELETE AFTER USAGE
import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // const expenses = [
// //   {
// //     description: 'Rent',
// //     note: 'Last months rent',
// //     amount: 199.99,
// //     createdAt: "January, 22nd"
// //   },
// //   {
// //     description: 'Coffee',
// //     note: '',
// //     amount: 2.45,
// //     createdAt: "January, 23rd"
// //   },
// //   {
// //     description: 'New Car',
// //     note: 'Ford Mustang Fastback',
// //     amount: 42000,
// //     createdAt: "January, 24th"
// //   }
// // ];

// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref('notes/-L3VQOHGOtpUG8tDH35G').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular'
// // });

// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   //console.log(data.name + ' is a ' + data.job.title + ' at ' + data.job.company);
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // });

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => { //Access to data
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {

// //   });

// // database.ref().set({
// //   name: 'Ivan Stevkovski',
// //   age: 21,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Front End Dev',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Skopje',
// //     country: 'Macedonia'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((data) => {
// //   console.log('This failed.', data);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle',
// //   'location/country': 'USA'
// // });

// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   })
// //   .catch((error) => {
// //     console.log('Did not remove data', error);
// //   });