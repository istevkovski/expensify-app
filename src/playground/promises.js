const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Ivan',
      age: 7
    });
    reject('Error: data was rejected');
  }, 3000);
});

console.log('before');


promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 3000);
  });
}).then((str) => {
  console.log('does this run', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');

// promise.then((data) => {
//   console.log('1', data);
//   return 'some data';
// }).then((str) => {
//   console.log('does this run', str);
// }).catch((error) => {
//   console.log('error: ', error);
// });

// console.log('after');