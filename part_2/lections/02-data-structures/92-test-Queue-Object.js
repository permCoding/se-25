const log = console.log;

class Queue { // очередь на основе объекта
    constructor() {
        this.elements = {}; // хранилище
        this.head = 0;      // начало очереди
        this.tail = 0;      // конец
    }
  
    enqueue(element) {
        this.elements[this.tail] = element; // добавляем в конец очереди
        this.tail++;
    }
  
    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.elements[this.head];
        delete this.elements[this.head]; // удаляем из начала очереди
        this.head++; // теперь вершина сместилась
        return item;
    }
  
    peek() {
        if (this.isEmpty()) return null;
        return this.elements[this.head];
    }
  
    get length() {
        return this.tail - this.head;
    }
  
    isEmpty() {
        return this.length === 0;
    }
}

const queue = new Queue();
queue.enqueue('A'); // elements: {0: 'A'}, head:0, tail:1
queue.enqueue('B'); // elements: {0:'A', 1:'B'}, head:0, tail:2
queue.enqueue('C'); // elements: {0:'A', 1:'B', 2:'C'}, head:0, tail:3

log(queue); // Queue { elements: { '0': 'A', '1': 'B', '2': 'C' }, head: 0, tail: 3 }
log(JSON.stringify(queue, null, 2));

log(queue.peek());    // 'A' (начало)
log(queue.dequeue()); // 'A', head=1
log(queue.length);    // 2

log(queue.dequeue()); // 'B'
log(queue.dequeue()); // 'C'
log(queue.isEmpty()); // true

/* queue = 
{
    "elements": {
        "0": "A",
        "1": "B",
        "2": "C"
    },
    "head": 0,
    "tail": 3
}
*/