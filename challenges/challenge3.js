/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 *
 * A: An async function always returns a Promise. It's different from a regular
 *    function because it can handle async operations (like API calls) using
 *    the keyword await to pause execution of the code block while it waits for
 *    the async operation to complete.
 *
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 *
 * A: By just calling the Promise without handling it, we receive it's current
 *    status. In this case it's pending since it hasn't been resolved or
 *    rejected yet.
 *
 * 3. Uncomment block #2 and run the code again. What happens now?
 *
 * A: Now we are handling it properly and, since the promise has been resolved,
 *    we can see the uppercased greeting.
 *
 * 4. Write an asynchronous method 'spacer' that takes a string as input and
 *    returns the input string with a space added between each character. You
 *    can use your solution from Part 3.
 *
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 *
 *    'H E L L O   T H E R E ,   D U C K Y'
 *
 *
 *******************************************************************************
 */


/**
 * Asynchronously returns a greeting for a specified name.
 * @param name The name of the person to greet.
 */
function greet(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof name === 'string') {
        resolve('Hello there, ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 500);
  });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 500);
  });
}

/**
 * Returns the spaced out version of a string.
 * @param {*} str The string to add space between characters.
 */
function spacer(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === "string") {
        resolve(str.split('').join(' '));
      } else {
        reject('Argument to spacer must be string');
      }
    }, 0)
  })
}

async function greetAndUppercase(name) {
  const greeting = await greet(name);
  const uppercasedGreeting = await uppercaser(greeting);
  const spaceEm = await spacer(uppercasedGreeting);
  return spaceEm;
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky');
console.log(result);

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  })
