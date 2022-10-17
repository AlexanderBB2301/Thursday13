// Create a function, inside the function add a second function, and again add a third function into the second function.
// Create 3 variables.
// Define 3 the variables in the correct place so that:
// The first variable is accessible inside every function.
// The second variable is accessible inside the second and third function only.
// The third variable is accessible inside the third function only.
// 4. Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// 5. Create a s it that iscope inside the 3rd function, place a variable inside only accessible inside that scope.
// 6. Create an object which contains a function which console.logs this.something, where something is any name you like.
// 7. Create an object which contains a variable which has the same name as you used above.
// 8. Use call to send the object at q7 to the function inside q6, forcing the function to use the this you sent it.~
// Hand in by 11am Monday along with the Dates work! */

function addition(x, y) {
  var sum = x + y;
  function multiply(sum, a) {
    var answer = sum * a;
    function message(message) {
      var written = answer.toString;
      captials = written.toUpperCase();
      let printMe = `The answer is ${capitals}.`;
    }
  }
}

const lodgers = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const lodger1 = {
  firstName: "Kai",
  lastName: "Smith",
};

const lodger2 = {
  firstName: "Sammy",
  lastName: "Ryan",
};
console.log(lodgers.fullName.call(lodger1));

console.log(lodgers.fullName.call(lodger2));
