class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert First
  insertFirst(data) {
    // Method - 1
    // this.head = new Node(data, this.head);

    // Method - 2 (Re-use code)
    this.insertAt(data, 0);
  }

  // Size
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  // Get the first node
  getFirst() {
    // Method - 1
    // return this.head;

    // Method - 2 (Re-use code)
    return this.getAt(0);
  }

  // Get the last node
  getLast() {
    // Method - 1
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    // Method - 2 (Re-use code)
    return this.getAt(this.size() - 1);
  }

  // Clear list
  clear() {
    this.head = null;
  }

  // Remove first node
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // Remove last node (tail)
  removeLast() {
    // i) checking if list is empty
    if (!this.head) {
      return;
    }

    // ii) checking if there is only one node in list
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // iii) if there is more than one node in list
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  // Insert at last
  insertLast(data) {
    // i) Getting the last node
    const last = this.getLast();

    // ii) checking if any node exits in last variable or its null
    if (last) {
      // node exits
      last.next = new Node(data);
    } else {
      // there is no node in list (empty)
      this.head = new Node(data);
    }
  }

  // Get a node at a specific index
  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  // Remove a node from a specific index
  removeAt(index) {
    // i) checking if list is empty
    if (!this.head) {
      return;
    }

    // ii) if the node is head (in 0 index)
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // iii) for other indexes
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  // Insert a node at a specific index
  insertAt(data, index) {
    // i) if the list is empty inserted node will be head
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // ii) insert at 0 index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // iii) insert at index > 0
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  // Custom Iterator function
  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // Generator function
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
