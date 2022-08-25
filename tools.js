let x = prompt("Enter a number between 1 and 20");
if (x < 1 || x > 20) {
  x = prompt("Enter a number between 1 and 20");
} else {
  for (let i = 0; i < 1000; i++) {
    if (parseFloat(x) % 2 == 0) {
      console.log(i);
    } else if (i == 23) {
      continue;
    }
  }
}
