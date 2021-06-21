const sum = (x, y, returnAwesome = false) => {
   if (returnAwesome) return 'awesome'
   let num1 = (x === null ? NaN : Number(x));
   let num2 = (y === null ? NaN : Number(y));
   return num1 + num2;
}

module.exports = sum;