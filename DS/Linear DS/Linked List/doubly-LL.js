class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
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
    // if (!this.head) return undefined;
    // if (!this.tail) return undefined;
    if (this.length === 0) return undefined;

    let temp = this.tail;

    // case 2 : for single node in linked list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    // case 3 : for two or more nodes in linked list
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    // decrease the length by 1
    this.length--;

    // return the poped value
    return temp;
  }

  // Adding a node at the beginning
  unshift(value) {
    const newNode = new Node(value);

    // case 1 : for empty linked list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    // case 2 : for non-empty linked list
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    // increase the length by 1
    this.length++;

    // return the entire linked list
    return this;
  }

  // Remove a node from beginning
  shift() {
    // Case 1 : for empty linked list
    if (this.length === 0) return undefined;

    let temp = this.head;

    // case 2 : for single node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    // case 3 : for two or more items in the linked list
    else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    // decrease the length by 1
    this.length--;

    // return the removed node
    return temp;
  }

  // Get the node at a specific index
  get(index) {
    // checking input if it is out of bound
    if (index < 0 || index >= this.length) return undefined;

    // finding value at the given index
    let temp = this.head;

    /* if the given index is less than the half-length of the linked list then we start iterate the loop from head, and if index is greater than the half-length of the linked list then we start iterate the loop from tail */
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  // Update the node's value at a specific index
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
    // case 1: if the index is 0
    if (index === 0) return this.unshift(value);

    // case 2: if index is equal to length of linked list
    if (index === this.length) return this.push(value);

    // cheking if index is out of bound
    if (index < 0 || index > this.length) return false;

    // case 3: for somewhere in the middle
    const newNode = new Node(value);

    // getting the previous and its next node of specified index
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }

  // Remove a node from a specific index
  remove(index) {
    // if the index is 0
    if (index === 0) return this.shift();

    // if index is last of linked list
    if (index === this.length - 1) return this.pop();

    // cheking if index is out of bound
    if (index < 0 || index >= this.length) return undefined;

    // for some where in the middle

    // first get the specified index and store into a variable
    const temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
