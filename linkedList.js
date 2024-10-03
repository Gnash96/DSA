class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null)
    this.tail = this.head
    this.length = 1
  }

  prepend(value) {
    let currentHead = this.head
    this.head = new Node(value, currentHead)
    this.length++
  }
  append(value) {
    this.tail.next = new Node(value, null)
    this.tail = this.tail.next
    this.length++
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
    }

    if (index >= this.length) {
      this.append(value)
    }

    let insertionVertex = this.traverse(this.head, index - 1);
    let holdingVertex = insertionVertex.next
    insertionVertex.next = new Node(value, holdingVertex)
    return this
  }
  
  
 remove(index){
    let vertex = this.traverse(this.head, index - 1);
    vertex.next = vertex.next.next; 
    return this;
 }

  traverse(node, index) {
    let counter = 0
    while (counter !== index) {
      node = node.next
      counter++
    }
    return node
  }

  printList() {
    let currentNode = this.head
    let list = []
    while (currentNode !== null) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    return list
  }
}



const list = new LinkedList(5)
list.append(10)
list.append(16)

console.log(list.printList())

list.insert(1, 7)

list.insert(3, 12)
console.log(list.printList());

list.remove(1)
console.log(list.printList())
