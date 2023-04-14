/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *
 * A: Order: Step 1, Step 3, Step 2. I know this because 'Step 2' is inside of
 *    a function that is called inside of a setTimeout function that executes
 *    only after 2000 ms. The other console.logs will execute top to bottom.
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *
 * A: Step 1, Step 3, Step 2
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *
 * A: I think this is a trick question. I believe it will still be printed in
 *    the same order, due to setTimeout using fancy Javascript magic and setting
 *    the callback function aside and verifying after the whole stack has ran
 *    if it's time to put the callback function back in the stack to execute.
 *    I re-ran and the order is the same. I have read about this Javascript
 *    behaviour in the past, and it's what sets it apart from other languages.
*     But I am unsure if my answer is correct or if my understanding is flawed.
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action();
  }, 0);
}
console.log('Step 1');

snooze(function () {
  console.log('Step 2');
  console.log("Async Action completed via callback");
});

console.log('Step 3');

