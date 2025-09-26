function fib(n, cache = {}) {
    
    if (n <= 1) return n;
    
    if (cache[n] !== undefined) return cache[n];
    
    cache[n] = fib(n-1, cache) + fib(n-2, cache);
    
    return cache[n];

}

console.log(fib(20));
