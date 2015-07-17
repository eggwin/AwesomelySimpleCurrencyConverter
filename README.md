# AwesomelySimpleCurrencyConverter
A very simple currency converter that converts a currency from one to another. Utilizes the latest information from open exchanges - with symbols!

## Installation

	npm install awesomelysimplecurrencyconverter --save

## Usage
	
	var ascc = require('awesomelysimplecurrencyconverter'),
		convert = ascc.convert;

	convert(1, 'USD', 'EUR', function (results) {
		console.log(results); // returns an object with the amount and symbols
	});

## Release History

	* 0.1.0 Initial Release