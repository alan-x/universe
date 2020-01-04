module.exports = function (api) {
	api.cache(true);

	const presets = ['@babel/preset-react'];
	const plugins = [
		['import', {libraryName: 'antd-mobile', style: 'css'}],
	];

	return {
		presets,
		plugins,
	};
};
