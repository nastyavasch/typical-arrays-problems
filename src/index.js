
exports.min = function min (array) {
  let min = array[0];
  for(let i=1; i < array.length; i++){
    if (array[i] < min) min = array[i];
  }
  return 0;
}

exports.max = function max (array) {
  let max = array[0];
  for(let i=1; i < array.length; i++){
    if (array[i] > max) max = array[i];
  }
  return 0;
}

exports.avg = function avg (array) {
  let num = array.length;
  let sum = 0;
  for(let i=0; i < num; i++){
      sum = sum + array[i];
  }
  let avg = sum/num;
  return 0;
}
