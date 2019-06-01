function lastIndexOf(array, value) {
  let foundMatch = false;
  let index;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      foundMatch = true;
      index = i;
      break;
    } 
  }
  if (foundMatch) {
    return index;
  } else {
    return -1;
  }
}