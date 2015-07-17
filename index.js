(function () {
	var oxr = require('open-exchange-rates'),
		fx = require('money'),
		fs = require('fs'),
		path = require('path');

	// config defaults for money.js
	fx.settings = {
		from: 'USD',
		to: 'EUR'
	};

	var CurrencyConverter = {
		convert: function (amount, c1, c2, cb) {
			var convertedAmount, symbolsFrom, symbolsTo,
				amount = amount || 0,
				convertFrom = c1 || 'USD',
				convertTo = c2 || 'EUR',
				symbolsPath = path.join(__dirname, '/lib/symbols.json');

			oxr.latest(function (err) {
				if (err) return false;
				var symbols = JSON.parse(fs.readFileSync(symbolsPath));
				fx.rates = oxr.rates;
				fx.base = oxr.base;
				oxr.converted = fx(amount).from(convertFrom).to(convertTo).toFixed(2);
				oxr.symbolFrom = symbols[convertFrom];
				oxr.symbolTo = symbols[convertTo];
				cb(oxr);
			});
		}	
	};
	module.exports = CurrencyConverter;
}());