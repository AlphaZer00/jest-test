function isUpperCase(str) {
	return str === str.toUpperCase();
}

const caesarCipher = (str, key) => {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (isUpperCase(char)) {
			let codeChar = String.fromCharCode(
				((char.charCodeAt(0) + key - 65) % 26) + 65
			);
			result += codeChar;
		} else {
			let codeChar = String.fromCharCode(
				((char.charCodeAt(0) + key - 97) % 26) + 97
			);
			result += codeChar;
		}
	}
	return result;
};

export { caesarCipher };
