function toggleBoolean(variable) {
	if (typeof variable == 'boolean') {
		return !variable;
	} else {
		console.log('Warning! Not a boolean.')
	}
}

console.log(toggleBoolean(false));
console.log(toggleBoolean('Hello'));