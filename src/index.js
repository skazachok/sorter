class Sorter {
  constructor() {
    this.storage = [];
    this.comparator = undefined;
    }

  add(value) {
      this.storage.push(value);// your implementation
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    var filteredStorage = indices.map(index => this.storage[index]);
    var sortedStorage = filteredStorage.sort((a,b) => a-b);
    if (this.comparator) {
      sortedStorage = filteredStorage.sort(this.comparator);
    }
    else{sortedStorage = filteredStorage.sort((a,b)=>a-b)}
    indices.sort().forEach((item,index) => {
      this.storage[item] = sortedStorage[index];
    })
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
