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
       if(this.root === null) return this.root = new TreeNode(val);
       if (parent.left === null && val < parent.val) {
           const newNode = new TreeNode(val);
           parent.left = newNode;
       }
       else if (parent.right === null && val >= parent.val) {
           const newNode = new TreeNode(val);
           parent.right = newNode;
       }
       else if (val < parent.val) {
           this.insert(val, parent.left);
       } else if (val >= parent.val) {
           this.insert(val, parent.right);
       } 
   }
   searchRecur(val, parent = this.root){
       if (parent === null) return false;

       if (parent.val === val) return true;
       else if (val < parent.val) {
           return this.searchRecur(val, parent.left);
       } else if (val >= parent.val) {
           return this.searchRecur(val, parent.right);
       }
   }
   
   searchIter(val, parent = this.root){
        if(this.root === null) return false;
        while(true){
            if (!parent) return false;
            if (parent.val === val) return true;
            if(val<parent.val) parent = parent.left;
            else if(val>parent.val) parent = parent.right;
        }
    }
//           f
//         /   \
//       b     w
//       / \
//     a    d
//       [null]   e
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