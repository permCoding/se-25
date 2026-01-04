class Queue {
    constructor() {
        this.elements = {}; // хранилище
        this.head = 0;      // начало
        this.tail = 0;      // конец
    }

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
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
