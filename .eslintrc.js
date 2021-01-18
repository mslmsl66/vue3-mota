module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	// "parser": "babel-eslint",
	"parser": "vue-eslint-parser",
	// "parser": "@typescript-eslint/parser",
	'parserOptions': {
		// "parser": "babel-eslint",
		// 'sourceType': 'module'
		"parser": "@typescript-eslint/parser"
	},
	'plugins': [
		'vue',
		'@typescript-eslint',
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