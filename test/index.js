var expect = require('chai').expect,
	awesomeSimpleCurrencyConverter = require('../index'),
	convert = awesomeSimpleCurrencyConverter.convert;

describe('@@ Convert Currency @@', function () {
	before(function () {
		convert(500, 'USD', 'EUR', function (result) {
			console.log('result', result);
		});
	});
	it ('should expose a function', function () {
		expect(convert).to.be.a('function');
	});
	it ('should convert $500USD to Euros');
	it ('should not be able to convert NaN');
});