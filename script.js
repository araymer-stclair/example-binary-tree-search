/**
 * This does a binary search on a sorted array
 * @param array
 * @param property
 * @param value
 * @returns {number}
 */
function binarySearchIndexV2(array, property, value) {
	let result = -1;
	let min = 0;
	let max = array.length - 1;
	const maxIterations = (array.length / 2) + 1;
	let iterationCount = 0;

	while (min <= max) {
		iterationCount += 1;
		const temporaryArray = array.slice();
		const guessIndex = Math.floor(((max - min) / 2) + min);
		if (iterationCount <= maxIterations) {
			const guess = temporaryArray[guessIndex];
			if (guess) { // is that needed?
				console.log('Guess', guess[property]);
				console.log('iterationCount', iterationCount);
				if (guess[property] === value) {
					result = guessIndex;
					console.log("FOUND");
					break;
				} else if (guess[property] < value) {
					max = guessIndex - 1;
					console.log("Greater than");
				} else {
					console.log("Less than");
					min = guessIndex + 1;
				}
			} else {
				result = -1;
				break;
			}
		} else {
			result = -1;
			break;
		}
	}

	return result;
}

let array = []
for (let i = 0; i < 100000; i += 1) {
	let tmp = {
value: i	
	};
	array.push(tmp);
}
array = array.reverse();
let input = prompt("Pick a number between 1 and 100, 000");
console.log('input', input);
let result = binarySearchIndexV2(array, 'value', parseInt(input));
if (result > 0) {
	alert(`Number found: ${array[result]['value']}`);
} else {
	alert('Not found');
}
