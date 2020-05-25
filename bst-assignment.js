class Node { 
    constructor(data) { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 


class BinarySearchTree {

    constructor() { 
        // root of a binary seach tree 
        this.root = null; 
    } 
    // helper method which creates a new node to  
    // be inserted and calls insertNode
    insert(data) { 
        // Creating a node and initailising  
        // with data  
        const newNode = new Node(data); 
                          
        // root is null then node will 
        // be added to the tree and made root. 
        if(!this.root) 
            this.root = newNode; 
        else
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode); 
        } 


    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else
    
                // if left is not null recurr until  
                // null is found 
                this.insertNode(node.left, newNode);  
        } 
    
        // if the data is more than the node 
        // data move right of the tree  
        else { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
    
                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    }


    maxDepth = (node) => { 
        if (!node) 
            return 0; 
        else { 
            // compute the depth of each subtree /
            const lDepth = this.maxDepth(node.left); 
            const rDepth = this.maxDepth(node.right); 
   
            // use the larger one /
            if (lDepth > rDepth) 
                return (lDepth + 1); 
             else 
                return (rDepth + 1); 
        } 
    } 

    depth = () => {
        return this.maxDepth(this.root)
    }
// helper method that calls the  
// removeNode with a given data 
remove(data) 
{ 
    // root is re-initialized with 
    // root of a modified tree. 
    this.root = this.removeNode(this.root, data); 
} 
  
// Method to remove node with a  
// given data 
// it recurrs over the tree to find the 
// data and removes it 
removeNode(node, key) 
{ 
          
    // if the root is null then tree is  
    // empty 
    if(node === null) 
        return null; 
  
    // if data to be delete is less than  
    // roots data then move to left subtree 
    else if(key < node.data) 
    { 
        node.left = this.removeNode(node.left, key); 
        return node; 
    } 
  
    // if data to be delete is greater than  
    // roots data then move to right subtree 
    else if(key > node.data) 
    { 
        node.right = this.removeNode(node.right, key); 
        return node; 
    } 
  
    // if data is similar to the root's data  
    // then delete this node 
    else
    { 
         // deleting node with no children 
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 
  
        // deleting node with one children 
        if(node.left === null) 
        { 
            node = node.right; 
            return node; 
        } 
          
        else if(node.right === null) 
        { 
            node = node.left; 
            return node; 
        } 
  
        // Deleting node with two children 
        // minumum node of the rigt subtree 
        // is stored in aux 
        const aux = this.findMinNode(node.right); 
        node.data = aux.data; 
  
        node.right = this.removeNode(node.right, aux.data); 
        return node; 
    } 
  
} 
// search for a node with given data 
find(node, data) 
{ 
   // if trees is empty return null 
    if(node === null) 
        return null; 
  
    // if data is less than node's data 
    // move left 
    else if(data < node.data) 
        return this.find(node.left, data); 
  
    // if data is less than node's data 
    // move left 
    else if(data > node.data) 
        return this.find(node.right, data); 
  
    // if data is equal to the node data  
    // return node 
    else
        return node; 
} 

 helper(node, lower, upper) {
    if (!node) return true;

    let val = node.data;
    if (lower && val <= lower) return false;
    if (upper && val >= upper) return false;

    if (! this.helper(node.right, val, upper)) return false;
    if (! this.helper(node.left, lower, val)) return false;
    return true;
  }

  isValidBST() {
    return this.helper(this.root, null, null);
  }

}

const main =()=> {
    const bst = new BinarySearchTree()
    bst.insert(3)
    bst.insert(1)
    bst.insert(4)
    bst.insert(6)
    bst.insert(9)
    bst.insert(2)
    bst.insert(5)
    bst.insert(7)
   console.log(bst.isValidBST())
    console.log(bst)
    console.log(bst.depth())

}

main()