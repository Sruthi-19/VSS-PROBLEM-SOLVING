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



