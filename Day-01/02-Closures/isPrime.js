function isPrimeFactory(){
	var cache = {};

	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 2) return true;
		for(var i = 2; i <= (n/2); i++)
			if (n % i === 0){
				return false;
			}
		return true;
	}

	function isPrime(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
	return isPrime;
}

function isOddOrEvenFactory(){
	var cache = {};

	function isOddOrEven(n){
		return n % 2 === 0 ? 'even' : 'odd';
	}

	function isPrime(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = isOddOrEven(n);
		return cache[n];
	}
	return isPrime;
}


function memorize(algoFn){
	var cache = {};
	return function (){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(this, arguments);
		return cache[key];
	}
}






