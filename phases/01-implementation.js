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
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
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
    const index = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    let currentPair = this.data[index];

    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      currentPair.value = value;
      return
    }

    if (this.data[index]) {
      newPair.next = this.data[index]
    }
      this.data[index] = newPair;
      this.count ++;
  }


  read(key) {
    // Your code here
    const index = this.hashMod(key);
    //const newPair = new KeyValuePair(key, value);
    let currentPair = this.data[index];

    while (currentPair && currentPair.key !==key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      return currentPair.value
    }

  }
  resize() {
    // Your code here

    this.capacity *= 2
    let copy = this.data;
    this.data = new Array(this.capacity).fill(null)
    this.count = 0;
    let curr
    for (let i =0; i < copy.length; i++) {
      curr = copy[i]

      while (curr) {
        this.insert(curr.key, curr.value)
        curr = curr.next
      }

    }

  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
