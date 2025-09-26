const log = console.log;

setTimeout(() => log(1), 0);

Promise.resolve().then(() => {log(2)});

log(3);

/*
3
2
1
*/

/*
JS Code --> Call Stack
  0) Call Stack --> Executor V8
  1) Call Stack --> Web API Browser || Node API
  2) Call Stack --> Web API Browser || Node API

Microtasks Queue (then, catch, finally, async, quueMicrotask)
Task Queue (setTimeout, setInterval, setImmediate, requestAnimationFrame)
*/