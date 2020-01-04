const clone = (originObj) => {
	if (Array.isArray(originObj)) {
		const destObj = [];
		originObj.forEach((obj, i) => destObj[i] = originObj[i]);
		return destObj;
	} else if (typeof originObj === 'object' && originObj !== null) {
		const destObj = {};
		Object.keys(originObj).forEach(key => {
			destObj[key] = originObj[key];
		});
		return destObj;
	} else {
		return originObj;
	}
};

let set;

const checkCycleReference = (obj) => {
	if (!set) {
		set = new WeakSet();
	}
	if (set.has(obj)) {
		throw new Error('cycle reference');
	}
	set.add(obj);
};

const wrappedCloneDeep = (originObj) => {
	if (Array.isArray(originObj)) {
		checkCycleReference(originObj);
		const destObj = [];
		originObj.forEach((obj, i) => destObj[i] = wrappedCloneDeep(originObj[i]));
		return destObj;
	} else if (typeof originObj === 'object' && originObj !== null) {
		checkCycleReference(originObj);
		const destObj = {};
		Object.keys(originObj).forEach(key => {
			destObj[key] = wrappedCloneDeep(originObj[key]);
		});
		return destObj;
	} else {
		return originObj;
	}
};

const cloneDeep = (obj) => {
	try {
		return wrappedCloneDeep(obj);
	} finally {
		// 确保执行清理操作
		set = new WeakSet();
	}
};

module.exports = {
	clone, cloneDeep,
};
