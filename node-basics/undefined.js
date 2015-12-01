// function greetUser(name)

function greetUser(name) {
	if (typeof name === 'string') {
		console.log('Hello ' + name);
	} else {
		console.log('Hello world');
	}
}

greetUser('Tyler');