const myPromise = new Promise((resolve, reject) => {
    const success = true
    if (success) {
      resolve('Operation completed successfully!');
    } else {
      reject('Operation failed!');
    }
});

myPromise
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });