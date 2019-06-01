function range(start, end, step) {
  const array = [];

  if (start === undefined || end === undefined || step === undefined || start >= end || step <= 0) {
    return array;
  } else {

    array.push(start);
    let length = Math.floor(((end - start) / step) + 1);

    for (let i = 1; i < length; i++) {
      array.push(array[i - 1] + step);
    }

    return array;
  }
}
