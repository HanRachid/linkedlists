class LinkedList {
  constructor() {
    this.headnode = null;
    this.size = 0;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.headnode;
    this.headnode = newNode;
    this.size++;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.headnode == null) {
      this.headnode = newNode;
      this.size++;
    } else {
      let current = this.headnode;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }
  tail() {
    let current = this.headnode;
    while (current.next) {
      current = current.next;
    }
    console.log(current.value);
  }
  at(index) {
    let current = this.headnode;

    if (index >= this.size || index < 0) {
      console.log("index out of range");
    } else {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  pop() {
    if (this.headnode) {
      let current = this.headnode;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.size--;
    }
  }

  contains(value) {
    if (this.headnode) {
      let current = this.headnode;
      while (current) {
        if (current.value == value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  find(value) {
    let counter = 0;
    if (this.headnode) {
      let current = this.headnode;
      while (current) {
        if (current.value == value) {
          return counter;
        }
        current = current.next;
        counter++;
      }
      return null;
    } else {
      return null;
    }
  }

  toString() {
    let stringValue = "";
    if (this.headnode) {
      let current = this.headnode;
      while (current) {
        stringValue += "( " + current.value + " ) -> ";
        current = current.next;
      }
      return stringValue + " null";
    }
  }

  insertAt(value, index) {
    let current = this.headnode;

    if (index >= this.size || index < 0) {
      console.log("index out of range");
    } else {
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      if (index == 0) {
        this.headnode = new Node(value, this.headnode);
      } else {
        let tempNext = current.next;
        current.next = new Node(value, tempNext);
      }
    }
  }
  removeAt(index) {
    if (index == this.size - 1) {
      this.pop();
    } else if (index == 0) {
      this.headnode = this.at(1);
    } else {
      let forwards = this.at(index + 1);
      let backwards = this.at(index - 1);
      backwards.next = forwards;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();

list.append(5);
list.append(6);
list.append(9);
list.append(8);
list.removeAt(3);
console.log(list.toString());
