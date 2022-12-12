function change() {
  document.body.classList.toggle("dark");
}
// var test = document.getElementById("btn1").onclick;
document.getElementById("btn1").onclick = (click) => {
  let choose = document.createElement("button");
  choose.innerHTML = `hi`;
  document.body.appendChild(choose);
};

// document.getElementById('btn1').onclick = function () {
//     let clickOn = document.createElement('button');
//     clickOn.innerHTML = `hi`;
//     document.body.appendChild(clickOn);
// }

function fibonacci(n, memo) {
  memo = memo || {};
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

console.log(fibonacci(6));
fibonacci(6);
fibonacci(5);
fibonacci(6);
console.log(fibonacci(5));

// Write a function that, given: an amount of money and an array of coin denominations. computes the number of ways to make the amount of money with coins of the available denominations.
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function coinChange(amount, denominations) {
  let ways = [];
  for (let i = 0; i < denominations.length; i++) {
    if (amount === denominations[i]) {
      ways.push(1);
    } else if (amount > denominations[i]) {
      ways.push(coinChange(amount - denominations[i], denominations) + 1);
    }
  }
  return ways.reduce((a, b) => a + b, 0);
}

