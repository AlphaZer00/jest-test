import { caesarCipher } from "./caesarCipher";

test("Shift letters", () => {
	expect(caesarCipher("xYz", 3)).toBe("aBc");
});
