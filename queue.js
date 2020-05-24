//queue
// Creates a node containing the value and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    display() {
        if (!this.first) {
           return null;
        }
    
        let ptr = this.first;
       
        while (ptr.next) {
          console.log(ptr.value)
          ptr = ptr.next;
        }
        console.log(ptr.value)
        console.log('--------------')
    }
    enqueue(value) {
        const node = new _Node(value);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}

let que = new Queue();

//6
// que.enqueue('starTrekQ')
// que.enqueue('Kirk')
que.enqueue('Spock')
que.enqueue('Uhura')
que.enqueue('Sulu')
que.enqueue('Checkov')
que.display()
que.dequeue()
que.display()
