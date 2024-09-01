import { calculator } from "./calculator";

test("addition", () => {
	expect(calculator.add(2, 3)).toBe(5);
});

test("subtraction", () => {
	expect(calculator.subtract(2, 3)).toBe(-1);
});

test("division", () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test("multiplication", () => {
	expect(calculator.multiply(2, 3)).toBe(6);
});
