'use strict';
var calculateNextPrime = (prevPrime) => {
    for (var i = prevPrime+1; i < prevPrime * prevPrime; i++) {
    	if (isPrime(i)) {
    		return i;
    	}
    }
}

var isPrime = (possiblePrime) => {
	if (possiblePrime % 2 == 0) {
		return false;
	}
    for (var i = 2; i < possiblePrime; i++) {
    	if (i % 100000000 == 0) {
    		console.log("1000 Million tests!!!");
    	}
    	if (possiblePrime % i == 0) {
    		return false;
    	}
    }
    return true;
}

console.log(calculateNextPrime(7));
console.log(calculateNextPrime(10));
console.log(calculateNextPrime(1024));
console.log(calculateNextPrime(10303));
console.log(calculateNextPrime(104729));
console.log(calculateNextPrime(1299821));
console.log(calculateNextPrime(10000000000));

