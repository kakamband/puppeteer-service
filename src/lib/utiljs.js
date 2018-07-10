const regUrl = /^https?:\/\/[^\s]+$/;

export default {
	isFunction(value) {
		return typeof value === 'function';
	},
	isUrl(url) {
		return regUrl.test(url);
	},
	unique(arr) {
		return Array.from(new Set(arr));
	},
	getParams(args) {
		const kMap = {
			'-p': 'port',
			'-d': 'root',
			'--debug': 'debug'
		};
		const ret = {};
		const keys = Object.keys(kMap);
		let key;
		args.forEach(item => {
			if (keys.includes(item)) {
				if (item.substr(0, 2) == '--') {
					ret[kMap[item]] = true;
				} else {
					key = kMap[item];
				}
			} else if (key && item.toString().charAt(0) != '-') {
				ret[key] = item;
				key = null;
			} else {
				key = null;
			}
		});
		return ret;
	}
};
