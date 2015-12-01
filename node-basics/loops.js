function countDownWhile(start, stop) {
	while (start > stop) {
		console.log(start);
		start--;
	}
}

function countDownFor(start, stop) {
	for (i = start; i > stop; i--) {
		console.log(i);
	}
}

countDownWhile(10, 1);
countDownFor(20,10);