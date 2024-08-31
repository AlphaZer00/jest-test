const reverseString = (str) => {
	const splitArr = str.split("");
	const reversedArr = splitArr.reverse();
	const joinArr = reversedArr.join("");
	return joinArr;
};

export { reverseString };
