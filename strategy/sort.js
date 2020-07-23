module.exports = class Sort {
  constructor(array) {
    this.array = array;
  }

  use(sortingAlgorithm) {
    return sortingAlgorithm.sort(this.array);
  }
};
