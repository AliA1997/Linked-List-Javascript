class Node {
  constructor(element){
    //this.element holds current node
    this.element = element;
    //this.next holds the pointer to next node.
    this.next = null;
  }
}
//Linked List holds elements synchronously unlike array that store element contigously.
class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Function to be implemented.
  //The add function, adds a element to the end of the linked list.
  /*
  ** If the head element is null, set the new node to the head of the linked list.
  ** Starting at the head element, loop through to the head of list as long there is a next pointer, if there isn't a next pointer it will indicate the user reached the end of the list. Assign the current node next pointer to the new node.
*/
  add(element){
    var node = new Node(element);

    //Store current node.
    var current;
    
    //If the head is null, then set new node to head.
    if(this.head == null) {
      this.head = node;
    } else {
      //If the head isn't null, set the current element to the head.
      current = this.head;
      //Iterate to the end of the list
      //While the current node has a element after it indicated by it's next property assign the current node to the next node.(current.next)
      while(current.next) {
        current = current.next;
      }

      //Once reaching the end of the node, set the current node next property to the new node.
      current.next  = node;
      //Add one to the size.
    }
    this.size++;
  }
  // -> linkedList = (1), linkedList.add(3) -> this.head(Node).next = 3

  //Insert a node based on a index
  insertAt(element, index){
    if(index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      //Assign variables for current and previous variables.
      let curr, prev;

      curr = this.head;

      //If they are adding a element at the first index.
      if(index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        //Initially start at the first element of list which is the head.
        curr = this.head;
        //Counter used to indicate if index has been reached.
        var it = 0;
        
        //Iterate over list
        while(it < index) {
          //Iterate once
          it++;
          //Assign previous node to current node.
          prev = curr;
          //Assign the current node to the current node's next node(curr.next)
          curr = curr.next;
        }
        //Once the current element reaches the next pointer, assign the pointer of the current element to new node, and set the previous element next pointer to new node.(pointer referencing next node)
        node.next = curr;
        prev.next = node;

      }
      this.size++;
    }
  }

  removeFrom(index){
    //If it's a invalid index(larger than size of the list).
    if(index > 0 && index > this.size) {
      return -1;
    } else {
      var prev, curr;
      var i = 0;
      //Start at the beginning of the list 
      curr = this.head;

      //If first element remove node by assigning head to next node.
      if(index === 0) {
        this.head = curr.next;
      } else {
        //While iterating over list, once it hit's the required index.
        //Assign the previous node to the current node, and assign the current node to the current node's next node.(pointer referencing next node)
        while(i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        } 

        //Once the previous and current node's are found, set the previous next node the current node's next node(If the current node's next node is not null.) Assign the current node's head to the current node's next node. Then assign the current node's next node to null.
        /**
         * { head: 3, next: { head: 5, next: { head: 7, next: { head: 8,next: { head: 9, next: null } }  }} } 
         * removeAt(3)
         * -> while(0 < 3) { curr = { head: 5, next: 7 } prev = { head: 3, next: 5 } }
         * -> while(1 < 3) { curr = { head: 7, next: 8 }, prev = { head: 5, next: 7 } }
         * -> while(2 < 3) { curr = { head: 9, next: null } prev = { head: 8, next: 9 } }
         * -> while(3 < 3) return false, ends loop.
         * Remove the current node, no need to reassignment of current node and previous node since current node next pointer is null
         * -> Result: { head: 3, next: { head: 5, next: { head: 7, next: { head: 8,next: null } } } }
         */
        prev.next = curr.next;
        this.size--;
        return curr.element;
      }
    }
  }

  removeElement(element){
    var current = this.head;
    var previous = null;
    //While the current element is not null, assign the previous element to the current element, and the current element
    while(current != null) {
      //If the current element is found
      if(current.element === element) {
        console.log("current element:", current.element);
        //If there is no prevous element, meaning there was only one element in the list, then assign the head(first element) to the current element next element.(Can be null FYI)
        if(previous == null) {
          this.head = current.next;
        } else {
          //If there is a previous element, assign the previous element's next element to the current element next element.
          previous.next = current.next;
        }
        //Reduce sice of linked list by 1.
        this.size--;
      
        current = current.next;
        //Return the element removed.
        return element;
      }
      //If not the current element assign the current element to the next element and the previous element to the current element.
      previous = current;
      current = current.next;
    }
    // if the current element is null, therefore making the call invalid return -1
    return -1;
  }


  //Helper Methods
  indexOf(element){
    var count = 0;
    //Set the current node to the first element.
    var current = this.head;
    //Iterate over the list, while the current element isn't null, iterate over the list.
    while(current != null) {
      //If the element is found return the number iterations(the index of the found element)
      if(current.element === element) return count;
      count++;
      current = current.next;
    }
    //If the element is not found return negative 1
    return -1;
  }

  isEmpty(){
    //Return a boolean indicating if the size of the list is zero.
    return (this.size === 0);
  }

  sizeOfList(){
    //Returns the size of the list
    console.log(this.size);
  }

  printList(){
    //Prints the list of items. 
    //Assign the current element which would be used to iterate over, then the resulting string.
    var current = this.head;
    var result = "";
    while(current) {
      result += `${current.element} `;
      current = current.next;
    }
    console.log(result);
  }
}

// creating an object for the 
// Linkedlist class 
var ll = new LinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 
  
// adding element to the list 
ll.add(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
console.log(ll.sizeOfList()); 
  
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ? " + ll.removeElement(50)); 
  
// prints 10 20 30 40
ll.printList(); 
  
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
  
// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
  
ll.printList(); 
  
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 
  
// prints 10 20 60 40 
ll.printList(); 