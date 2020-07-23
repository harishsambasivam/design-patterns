class Sort {
  constructor(array) {
    this.array = array;
  }

  mergeSort() {
    // sorting happens here
    console.log("merge sort");
  }

  insertionSort() {
    // sorting happens here
    console.log("insertion sort");
  }

  heapSort() {
    // sorting happens here
    console.log("heap sort");
  }
}
// context
const array1 = new Sort([1, 2, 3, 2]); // almost sorted so prefer Insertion Sort
array1.insertionSort();

const array2 = new Sort([3, 2, 1, 4]); // reverse order so prefer Merge Sort
array2.mergeSort();

const largeArray = new Sort(new Array(100000)); // for larger arrays we can use heapSort hence it uses less memory than merge/quick.
largeArray.heapSort();

// 💩 breaks open for extension, not modification principle(think of updating a sorting algorithm)
