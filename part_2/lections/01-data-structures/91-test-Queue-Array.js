class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) {
        this.items.push(item);     // O(1) добавление в конец
    }
    
    dequeue() {
        return this.items.shift(); // O(n) удаление из начала
    }
    
    peek() {
        return this.items[0];
    }
    
    get length() {
        return this.items.length;
    }

    isEmpty() {
        return this.length === 0;
    }
}
  
const queue = new Queue();
queue.enqueue('A'); // elements: {0: 'A'}, head:0, tail:1
queue.enqueue('B'); // elements: {0:'A', 1:'B'}, head:0, tail:2
queue.enqueue('C'); // elements: {0:'A', 1:'B', 2:'C'}, head:0, tail:3

console.log(queue.peek());    // 'A' (начало)
console.log(queue.dequeue()); // 'A', head=1
console.log(queue.length);    // 2

console.log(queue.dequeue()); // 'B'
console.log(queue.dequeue()); // 'C'
console.log(queue.isEmpty()); // true
