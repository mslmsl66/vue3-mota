module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	"parser": "babel-eslint",
	"parser": "vue-eslint-parser",
	'parserOptions': {
		"parser": "babel-eslint",
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'indent': [
			'error',
			2,
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			0,
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error'
		]
	}
}