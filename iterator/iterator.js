// https://medium.com/better-programming/understanding-the-iterator-pattern-in-javascript-typescript-using-symbol-iterator-ab400d46b14a


// the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements.

class Iterator {
  constructor(item) {
    this.items = item;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  value() {
    return this.items[this.index++];
  }

  // Iterator
  next() {
    return { value: this.value(), done: !this.hasNext() };
  }
}

let iterator = new Iterator([1, 2, 3, 4, 5]);

while (iterator.hasNext()) {
  console.log(iterator.next());
}

// Output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: true }
