const analyzeArray = (arr) => {
	let average = 0;
	for (let i = 0; i < arr.length; i++) {
		average += arr[i];
	}
	average /= arr.length;

	return {
		average: average,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
};

export { analyzeArray };
