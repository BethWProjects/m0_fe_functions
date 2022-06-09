// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// I added missing semicolons at the end of the console.log() statement and at the end of the calling function


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I added a semicolon after the variable and moved the end curly bracket to the left.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
// The function keyword was not completed, and I moved the las curly bracket to the correct position to close the defining function.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
  console.log(`the average is: ` + (avg));
  }
  average(1, 2);
// I moved the first curly bracket up and to the right of the parenthesis.  To get the average I removed the $, because we were using the avg calculation to find the answer to 'the average is'.  The function was defined but not called, so I added the function call syntax
