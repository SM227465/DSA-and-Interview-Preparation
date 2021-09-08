class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Insert value at the end
  push(value) {
    const newNode = new Node(value);

    // checking if Linked list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // if linked list is not empty
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increase the length by 1
    this.length++;

    // return the entire linked list
    return this;
  }

  // Remove value from end
  pop() {
    // case 1 : for empty linked list
    if (!this.head) return undefined;

    // case 2: for two or more nodes in linked list
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;

    // decrease the value by 1
    this.length--;

    // case 3: for single node in linked list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return the poped value
    return temp;
  }

  // Add value at the beginning
  unshift(value) {
    const newNode = new Node(value);

    // case 1 : for empty linked list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // case 2 : for non-empty linked list
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    // increase the length by 1
    this.length++;

    // return the entire linked list
    return this;
  }

  // Remove value from beginning
  shift() {
    // Case 1 : for empty linked list
    if (!this.head) return undefined;

    // case 2: for two or more items in the linked list
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    // decrease the length by 1
    this.length--;

    // case 3 : for single node
    if (this.length === 0) {
      this.tail = null;
    }

    // return the removed value
    return temp;
  }

  // Get the value at a specific index
  get(index) {
    // checking input if it is out of bound
    if (index < 0 || index >= this.length) return undefined;

    // finding value at the given index
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  // Update the value at a specific index
  set(index, value) {
    // find the value at the given index
    let temp = this.get(index);

    // check if a value exits in the given index, if exits update otherwise return false
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // Insert a new node at a specific index
  insert(index, value) {
    // if the index is 0
    if (index === 0) return this.unshift(value);

    // if index is equal to length of linked list
    if (index === this.length) return this.push(value);

    // cheking if index is out of bount
    if (index < 0 || index > this.length) return false;

    // for any middle indexes
    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return true;
  }

  // Remove a node from a specifi index
  remove(index) {
    // if the index is 0
    if (index === 0) return this.shift();

    // if index is equal to length of linked list
    if (index === this.length - 1) return this.pop();

    // cheking if index is out of bount
    if (index < 0 || index >= this.length) return undefined;

    // for any middle index
    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  // Reverse
  reverse() {
    // swap head and tail using third variable
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    // we need two more variables those point to before and after of a specific node
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
