/* createAdder(baseNumber)
		return function(numberToAdd)
*/

function createAdder(baseNumber) {
	return function (secondNumber) {
		result = baseNumber + secondNumber;
		return result;
	}
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));

// function greetMaker(name) {
// 	function greet() {
// 		console.log('Hello ' + name + '!');
// 	}

// 	return greet;
// }

// var greetAndrew = greetMaker('Andrew');

// greetAndrew();

// var greetWorld = greetMaker('world');
// greetWorld();