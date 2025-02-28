class NodeTree {
  val: number;
  left: NodeTree | null;
  right: NodeTree | null;

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root: Array<number | null>) {
  function buildBfs(arr: Array<number | null>): NodeTree | null {
    if (!arr.length) {
      return null;
    }

    const root = new NodeTree(arr[0]);
    const queue = [root];
    let i = 1;

    while (0 < queue.length && i < arr.length) {
      const current = queue.shift()!;

      if (arr[i] !== null) {
        current.left = new NodeTree(arr[i]);
        queue.push(current.left);
      }
      i++;

      if (arr[i] !== null) {
        current.right = new NodeTree(arr[i]);
        queue.push(current.right);
      }
      i++;
    }

    return root;
  }

  const tree = buildBfs(root);

  const values: number[] = [];
  const stack = [tree];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current?.val !== undefined && current?.val !== null)
      values.push(current.val);

    if (current?.right !== undefined && current?.right !== null)
      stack.push(current.right);
    if (current?.left !== undefined && current?.left !== null)
      stack.push(current.left);
  }

  return values;
}
