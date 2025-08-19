class MinStack {
  stack: { value: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push({ value: val, min: val });
    } else {
      this.stack.push({
        value: val,
        min: Math.min(Number(this.stack[this.stack.length - 1]?.min), val),
      });
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return Number(this.stack[this.stack.length - 1]?.value);
  }

  getMin(): number {
    return Number(this.stack[this.stack.length - 1]?.min);
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
const param_1 = minStack.getMin();
const param_2 = minStack.pop();
const param_3 = minStack.top();
const param_4 = minStack.getMin();
