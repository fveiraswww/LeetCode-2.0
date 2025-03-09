class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
/* 
        3
      /  \
    9     20
        /   \
      15     7


res: 9 + 15 = 24
*/

function sumOfLeftLeaves(root: TreeNode | null): number {
  let stack = [root];
  let values: Array<number | null> = [];
  let leftLeaves: number[] = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current?.val) values.push(current.val);
    if (current?.right) {
      stack.push(current.right);
    }
    if (current?.left) {
      stack.push(current.left);
      if (current.left.left === null && current.left.right === null) {
        leftLeaves.push(current.left.val);
      }
    }
  }

  let result = 0;
  for (let i = 0; i < leftLeaves.length; i++) {
    result += leftLeaves[i];
  }

  return result;
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

sumOfLeftLeaves(tree);
