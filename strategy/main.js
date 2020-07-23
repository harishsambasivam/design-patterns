const HeapSort = require("./heapsort.js");
const InsertionSort = require("./insertionsort");
const Sort = require("./sort");
const MergeSort = require("./mergesort.js");

// strategies/algorithms
const insertionSort = new InsertionSort();
const heapSort = new HeapSort();
const mergeSort = new MergeSort();

// context
const array1 = new Sort([1, 2, 3, 2]); // almost sorted so prefer Insertion Sort
array1.use(insertionSort);

const array2 = new Sort([3, 2, 1, 4]); // reverse order so prefer Merge Sort
array2.use(mergeSort);

const largeArray = new Sort(new Array(100000)); // for larger arrays we can use heapSort hence it uses less memory than merge/quick.
largeArray.sort(heapSort);
