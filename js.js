const counter = {
value: 0,
increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  },
  getValue() {
    return this.value;
  }
}

counter.increment();
console.log(counter.getValue());