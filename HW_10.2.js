let text = "Wonderful Joyful Happiness Time Task Apple Banana String";
let pattern = /\b[^Aa\s]{6,}\b/g;
let matchesReg = text.match(pattern);
console.log(matchesReg);