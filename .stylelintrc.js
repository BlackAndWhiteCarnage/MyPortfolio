module.exports = {
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-recommended-scss',
		'stylelint-prettier/recommended',
		'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-order', 'stylelint-prettier'],
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested'],
				except: ['blockless-after-same-name-blockless'],
				ignoreAtRules: ['else'],
			},
		],
		'color-named': [
			'never',
			{
				ignore: ['inside-function'],
			},
		],
		'function-no-unknown': null,
		'function-url-quotes': 'always',
		'order/order': ['custom-properties', 'declarations', 'rules'],
		'order/properties-alphabetical-order': true,
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested'],
			},
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['value'],
			}
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': ['export', 'global']
			}
		],
	}
};
