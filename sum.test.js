// JEST tests!
// Jest will load up automatically and give us
// all the jest stuff for free -- we do not have
// to require anything here
// test, expect
const sum = require('./sum');

test('sum of two positive numbers', () => {
   expect(sum(1, 2)).toBe(3);
   expect(sum(1, 1)).toBe(2);
   expect(sum(10, 2)).toBe(12);
});

test('sum of two negative numbers', () => {
   expect(sum(-1, -2)).toBe(-3);
   expect(sum(-1, -1)).toBe(-2);
});

test('Turns strings into numbers', () => {
   expect(sum('1', '2')).toBe(3);
   expect(sum('1', 2)).toBe(3);
   expect(sum(1, '2')).toBe(3);
})

test('Handles objects', () => {
   expect(sum({}, 5)).toBeNaN()
   expect(sum({}, {})).toBeNaN()
   expect(sum(5, {})).toBeNaN()
})

test('Handles null', () => {
   expect(sum(null, 5)).toBeNaN()
   expect(sum(null, null)).toBeNaN()
   expect(sum(5, null)).toBeNaN()
})

test('Handles undefined', () => {
   expect(sum(undefined, 5)).toBeNaN()
   expect(sum(undefined, undefined)).toBeNaN()
   expect(sum(5, undefined)).toBeNaN()
   expect(sum(5)).toBeNaN()
})

test('Test isAwesome param', () => {
   expect(sum(100, 100, true)).toBe('awesome');
   expect(sum(NaN, 100, true)).toBe('awesome');
})