function arraySort(given_array) {
    let cnt=0;
    while(cnt<given_array.length){
        for (let i = 0; i < given_array.length; i++) {
            if (given_array[i] === 2) {
              if (i !== given_array.length - 1) {
                let temp = given_array[i];
                given_array[i] = given_array[i + 1];
                given_array[i + 1] = temp;
              }
            } 
            else if (given_array[i] === 0) {
              if (i !== 0) {
                let temp = given_array[i];
                given_array[i] = given_array[i - 1];
                given_array[i - 1] = temp;
              }
            }
        }
        cnt++;
    }
  
  return given_array;
}

console.log(arraySort([1, 2, 1, 1, 1, 0, 0, 0, 1, 2]));
