import capitalize from './capitalize.js'

test('Returns with first character capitalized', () => {
    expect(capitalize('string')).toBe('String');
});