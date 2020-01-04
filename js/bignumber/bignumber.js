const dot = '.';
/**
 * 寻找小数点位置
 * @param arr
 * @returns {*}
 */
const findDotIndex = arr => arr.findIndex((s) => String(s) === dot);
/**
 * 将数字转化为字符数组
 * @param num
 * @returns {string[]}
 */
const numToStringArr = num => String(num).split('');

/**
 * 反转字符串，低位放前面，长度对齐，双端补0
 * @param numA
 * @param numB
 * @returns {{arrA: string[], arrB: string[], reverseOperation: boolean}}
 */
const formatArray = (numA, numB) => {
	let arrA = numToStringArr(numA);
	let arrB = numToStringArr(numB);
	arrA = arrA.reverse();
	arrB = arrB.reverse();
	let dotA = findDotIndex(arrA);
	let dotB = findDotIndex(arrB);
	let reverseOperation = false;
	if (arrA.length - dotA < arrB.length - dotB) {
		[arrA, arrB] = [arrB, arrA];
		[dotA, dotB] = [dotB, dotA];
		reverseOperation = true;
	}
	if (dotA === -1) {
		arrA.unshift(dot);
		dotA = 0;
	}
	if (dotB === -1) {
		arrB.unshift(dot);
		dotB = 0;
	}
	const prefixZero = Array(Math.abs(dotA - dotB)).fill(0);
	if (dotA > dotB) {
		arrB = [...prefixZero, ...arrB];
	} else if (dotA < dotB) {
		arrA = [...prefixZero, ...arrA];
	}

	const maxLen = Math.max(arrA.length, arrB.length);
	arrA = [...arrA, ...Array(maxLen - arrA.length).fill(0)];
	arrB = [...arrB, ...Array(maxLen - arrB.length).fill(0)];

	return {
		arrA,
		arrB,
		reverseOperation
	};
};

const add = (numA, numB) => {
	const {arrA, arrB} = formatArray(numA, numB);

	let overflow = 0;
	const result = [];
	for (let i = 0; i < Math.max(arrA.length, arrB.length); i++) {
		const a = String(arrA[i]);
		const b = String(arrB[i]);
		if (a === '.') {
			if (b !== '.') {
				throw new Error('some error occur!');
			}
			result.push('.');
			continue;
		}
		const tempResult = Number(a) + Number(b) + overflow;
		result[i] = tempResult % 10;
		overflow = tempResult / 10 | 0;
	}
	if (overflow !== 0) {
		result.push(overflow);
	}
	return result.reverse().join('').replace(/\.$/, '');
};

const sub = (numA, numB) => {

	const {arrA, arrB, reverseOperation} = formatArray(numA, numB);

	let overflow = 0;
	const result = [];
	for (let i = 0; i < Math.max(arrA.length, arrB.length); i++) {
		const a = String(arrA[i]);
		const b = String(arrB[i]);
		if (a === '.') {
			if (b !== '.') {
				throw new Error('some error occur!');
			}
			result.push('.');
			continue;
		}
		const tempResult = Number(a) - Number(b) - overflow;
		if (tempResult < 0) {
			result[i] = Math.abs(tempResult + 10);
			overflow = 1;
		} else {
			result[i] = tempResult;
			overflow = 0;
		}
	}
	if (overflow !== 0) {
		result.push('-');
	}

	let computedResult = result.reverse().join('').replace(/^0+/, '');

	if (reverseOperation) {
		if (!computedResult.startsWith('-')) {
			computedResult = `-${computedResult}`;
		}
	}
	return computedResult.replace(/\.$/, '') || '0';
};

module.exports = {
	add, sub
};
