function multiply() {
  const args = [...arguments];
  const result = args.reduce((total, item) => {
    return item ? item * total : item + total;
  }, 1);
  return result;
}

// console.log(multiply(2, 3, 4));
console.log(multiply(2, 0, 4));
