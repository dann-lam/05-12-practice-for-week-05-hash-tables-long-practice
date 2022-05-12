class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);

    let currPair = this.data[index]

      while (currPair && currPair.key !== key) {
        currPair = currPair.next
      }

      if (currPair) {
          currPair.value = value
      } else {
          const newPair = new KeyValuePair(key, value); // we create it right here but its in limbo
          newPair.next = this.data[index] // when you add to head if there are other kv pairs at the index you are connecting the pointers
          this.data[index] = newPair; //this has to do something
          this.count++; //increments when we create newPair
      }

  }


  read(key) {
    // Your code here
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
