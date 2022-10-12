const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    if (!this.tree) {
      return null;
    }
    return this.tree;
  }

  add(data) {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here    
    let newTree = new Node(data);
    
      if (!this.tree) {
        this.tree = newTree;        
      }
      else {      
        let t = this.tree;
        function direct() {
          if (newTree.data < t.data) {
            if (!t.left) {
              t.left = newTree;
            }
            else {
              t = t.left;
              direct();
            }            
          }
          else if (newTree.data > t.data){
            if (!t.right) {
              t.right = newTree;
            }
            else {
              t = t.right;
              direct();
            }  
          }
          
        }
        direct();    
      }    
  }

  has(data) {
    if (!this.tree) {
      return false;        
    }
    else {
      let t = this.tree;
      function hasData() {
        if (t.data === data) {
          return true;
        }
        else if (t.data > data) {
          t = t.left;
          if (!t) {
            return false;
          }
          else {
            return hasData();
          }
          
        }
        else {
          t = t.right;
          if (!t) {
            return false;
          }
          else {
            return hasData()
          }
        }
      }
      return hasData();
    }
  }

  find(data) {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    if (!this.tree) {
      return false;        
    }
    else {
      let t = this.tree;
      function hasData() {
        if (t.data === data) {
          return t;
        }
        else if (t.data > data) {
          t = t.left;
          if (!t) {
            return null;
          }
          else {
            return hasData();
          }
          
        }
        else {
          t = t.right;
          if (!t) {
            return null;
          }
          else {
            return hasData()
          }
        }
      }
      return hasData();
    }
  }

remove(data) {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    this.tree = rem(this.tree, data)
    function rem(t, data) {
      if (!t) {
        return null;
      }
      else {
        if (data < t.data) {
          t.left = rem(t.left, data);
          return t;
        }
        else if (data > t.data) {
          t.right = rem(t.right, data);
          return t;
        }
        else {
          if (!t.left && !t.right) {
            return null;
          }
          else if (!t.left) {
            t = t.right;
            return t;
          }
          else if (!t.right) {
            t = t.left;
            return t;
          }

          let r = t.right
          while (r.left) {
            r = r.left;
          }
          t.data = r.data;
          t.right = rem(t.right, r.data);
          return t;
        }
      }
    }
  } 

  min() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    if (!this.tree) {
      return null;        
    }
    else {
      let t = this.tree;
      while (t.left) {
        t = t.left;
      }
      return t.data;
    }
  }

  max() {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    if (!this.tree) {
      return null;        
    }
    else {
      let t = this.tree;
      while (t.right) {
        t = t.right;
      }
      return t.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};