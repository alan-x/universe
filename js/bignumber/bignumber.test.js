const bignumber = require('./bignumber');

const {add, sub} = bignumber;

describe('bignumber test', () => {
	describe('add test', () => {
		test('add two int is ok', () => {
			expect(add(1,11)).toBe('12');
		});
		test('int add float is ok', () => {
			expect(add(1,11.1)).toBe('12.1');
		});
		test('overflow is ok', () => {
			expect(add(9999,1)).toBe('10000');
		});
		test('float is ok', () => {
			expect(add(11.22,2.3)).toBe('13.52');
		});
		test('0.1 + 0.2 is ok', () => {
			expect(add(0.1,0.2)).toBe('0.3');
		});
		test('bignumber is ok', () => {
			expect(add(String(Number.MAX_SAFE_INTEGER),1)).toBe('9007199254740992');
		});
	});

	describe('sub test', () => {
		test('sub two int is ok', () => {
			expect(sub(1,1)).toBe('0');
		});
		test('overflow is ok', () => {
			expect(sub(1,10)).toBe('-9');
		});
		test('float is ok', () => {
			expect(sub(13,2.9)).toBe('10.1');
		});
		test('bignumber is ok', () => {
			expect(sub(`1${String(Number.MAX_SAFE_INTEGER)}`,1)).toBe('19007199254740990');
		});
	});
});
