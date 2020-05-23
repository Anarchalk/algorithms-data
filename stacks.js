class _Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
    constructor() {
      this.top = null;
    }
  
    display() {
      if (!this.top) {
         return null;
      }
  
      let ptr = this.top;
     
      while (ptr.next) {
        console.log(ptr.data)
        ptr = ptr.next;
      }
      console.log(ptr.data)
      console.log('--------------')
  }
  
    push(data) {
      /* If the stack is empty, then the node will be the
                  top of the stack */

      if (!this.top) {
        this.top = new _Node(data, null);
        return this.top;
      }
      /* If the stack already has something, 
        then create a new node,
        add data to the new node, and
        have the pointer point to the top */
      const node = new _Node(data, this.top);
      this.top = node;
    }
    pop() {
      /* In order to remove the top of the stack, you have to point
             the pointer to the next data and that next data becomes the
             top of the stack */
      const node = this.top;
      this.top = node.next;
      return node.data;
    }
    peek(){
      return this.top.data 
    }

    isEmpty(){
      return !this.top
    }
  }

 module.exports = Stack;
 //export default Stack;