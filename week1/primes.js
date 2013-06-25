#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";
var out = "";
var primes = [];

var n = 2;
while(primes.length < 100) {
  if(isPrime(n))
    primes.push(n);
  n++;
}

for(var i = 0; i < primes.length - 1; i++)
  out += primes[i] + ",";
out += primes[primes.length - 1]+"\n";

fs.writeFileSync(outfile, out);

function isPrime(p) {
  var upperBound = Math.floor(Math.sqrt(p));
  
  for (var i = 2; i <= upperBound; i++) {
    if(p % i == 0) return false;  
  }

  return true;
}
