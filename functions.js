// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hello, my name is Beth.");
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function dogName(name) {
  console.log(`Hello, my dog's name is ${name}`);
}
dogName("Jimmy");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function company(name, maxSalary, minSalary) {
  var sum = maxSalary - minSalary;
  console.log(`The company: ${name} has an average pay range of: ${sum}`);
  }
  company("Turing", 110000, 90000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(number, item) {
  var inStock = [4, 3, 2, 1];
  for (var i = 0; i < inStock.length; i++){
    if (inStock[i] === number && inStock[i] >= 4){
      console.log(`${item} is in stock`);
    } else if (inStock[i] === number && number <= 3 ){
      console.log(`${item} - running LOW`);
  } else if (number === 0){
      console.log(`${item} - OUT of Stock`);
      break;
    }
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
