//
// Object desctructuring
//

// const person = {
//   name: 'Ivan',
//   age: 20,
//   location: {
//     city: "Skopje",
//     temp: -5
//   }
// };


// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvenia', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [type, s_price, m_price, l_price] = item;
const [type, , m_price] = item;
console.log(`A medium ${type} costs ${m_price}`);