const clones = require('./clone');

const {clone, cloneDeep} = clones;

describe('clone and cloneDeep test', () => {
	describe('clone test', () => {
		test('clone base dataType', () => {
			expect(clone(1)).toBe(1);
			expect(clone('string')).toBe('string');
			expect(clone(false)).toBe(false);
			expect(clone(true)).toBe(true);
			expect(clone(null)).toBe(null);
			expect(clone(undefined)).toBe(undefined);
		});
		test('clone Array', () => {
			const arr = [1, 2, 3];
			expect(clone(arr)).not.toBe(arr);
			expect(clone(arr)).toEqual(arr);
		});
		test('clone Object', () => {
			const obj = {name: 'name'};
			expect(clone(obj)).not.toBe(obj);
			expect(clone(obj)).toEqual(obj);
		});
		test('clone Object Array', () => {
			const obj = {name: 'name'};
			const arr = [obj];
			expect(clone(arr)).not.toBe(arr);
			expect(clone(arr)).toEqual(arr);
			expect(clone(arr)[0]).toBe(obj);
		});
	});

	describe('clone clone deep', () => {
		test('clone base dataType', () => {
			expect(cloneDeep(1)).toBe(1);
			expect(cloneDeep('string')).toBe('string');
			expect(cloneDeep(false)).toBe(false);
			expect(cloneDeep(true)).toBe(true);
			expect(cloneDeep(null)).toBe(null);
			expect(cloneDeep(undefined)).toBe(undefined);
		});
		test('clone Array', () => {
			const arr = [1, 2, 3];
			expect(cloneDeep(arr)).not.toBe(arr);
			expect(cloneDeep(arr)).toEqual(arr);
		});
		test('clone Object', () => {
			const obj = {name: 'name'};
			expect(cloneDeep(obj)).not.toBe(obj);
			expect(cloneDeep(obj)).toEqual(obj);
		});
		test('clone Object Array', () => {
			const obj = {name: 'name'};
			const arr = [obj];
			expect(cloneDeep(arr)).not.toBe(arr);
			expect(cloneDeep(arr)).toEqual(arr);
			expect(cloneDeep(arr[0])).not.toBe(obj);
		});
		test('cycle reference', () => {
			const obj = {name: 'name'};
			const arr = [obj];
			obj.arr = arr;
			expect(()=>cloneDeep(arr)).toThrow();
		});
	});
});
