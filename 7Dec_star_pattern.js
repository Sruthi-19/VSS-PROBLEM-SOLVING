//TRY 1
function starPattern1(given_value) {
  for (let i = given_value; i >= 1; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log(starPattern1(4));

//TRY 2
function starPattern2(given_value) {
  let str = "*";
  for (let i = given_value; i >= 1; i--) {
    let result_string = str.repeat(i);
    console.log(result_string);
  }
}
console.log(starPattern2(5));

//COMPLETE

