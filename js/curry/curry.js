const curry = (...args) => {
	let resultArgs = args;
	const innerCurry = function (...args2) {
		resultArgs = [...resultArgs, ...args2];
		return innerCurry;
	};

	const result = function () {
		return resultArgs.reduce((sum, num) => Number(sum) + Number(num), 0);
	};
	innerCurry.toString = result;
	innerCurry.valueOf = result;

	return innerCurry;
};

Number.add = function (...args) {
	return [this, ...args].reduce((sum, num) => sum + num, this);
};

module.exports = curry;
