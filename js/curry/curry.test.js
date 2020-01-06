const curry = require('./curry');

test('curry test', () => {
	expect(curry(1).toString()).toBe(1);
	expect(curry(1,2,3,4,5).toString()).toBe(15);
	expect(curry(1)(2)(3)(4,5).toString()).toBe(15);
});
