class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
   }
   insert(val, parent = this.root){
       const newNode = new TreeNode(val);
       if(this.root === null) this.root = newNode;
       else{
           this.findInsertionSpot(this.root, newNode); 
       } 
   }

//    searchRecur(val){
    
//    }

   findInsertionSpot(parent, node){
        if (parent.left === null && node.val<parent.val) {
            console.log("hi");
            parent.left = node;
        }
        else if(parent.right === null && node.val>=parent.val){
            parent.right = node;
        }
        else if (node.val < parent.val) {
            this.findInsertionSpot(parent.left, node);
        } else if (node.val >= parent.val) {
            this.findInsertionSpot(parent.right, node);
        }
    }
}

const bst = new BST();
bst.insert("f");
bst.insert("b");
bst.insert("a");
bst.insert("w");
bst.insert("d");
console.log(bst);

//           f
//         /   \
//       b     w
//       / \
//     a    d
// // let root = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// root.left = b;
// root.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//console.log(preOrderArray(root)); //[a, b, d, e, c, f]
  //       a

  //     b       c
  //  d    e       f

module.exports = {
    TreeNode,
    BST
};