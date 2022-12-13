//APPROACH 1
function matrix90Rotate(given_matrix) {
  let result_matrix = [];
  for (let i = 0; i < given_matrix.length; i++) {
    let row_array = [];
    for (let j = given_matrix.length - 1; j >= 0; j--) {
      row_array.push(given_matrix[j][i]);
    }
    result_matrix.push(row_array);
  }
  return result_matrix;
}

//APPROACH 2
function matrix90Rotate1(given_matrix) {
  for (let i = 0; i < given_matrix.length; i++) {
    for (let j = i; j < given_matrix.length; j++) {
      temp = given_matrix[j][i];
      given_matrix[j][i] = given_matrix[i][j];
      given_matrix[i][j] = temp;
    }
  }

  for (let i = 0; i < given_matrix.length; i++) {
    given_matrix[i].reverse();
  }
  return given_matrix;
}

console.log(
  matrix90Rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],  
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
console.log(
  matrix90Rotate1([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
