const numbersMapping = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
    5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
    14: "fourteen", 15: "fifteen", 16: "sixteen", 
    17: "seventeen", 18: "eighteen", 19: "nineteen", 
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
    60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred"
};


module.exports = function toReadable(number){
    const maxDigitsNumber = 100;
    if (number < maxDigitsNumber && numbersMapping[number] != undefined){ return numbersMapping[number]; }

    let result = [];
    if (number >= maxDigitsNumber){
        result.push(numbersMapping[Math.floor((number - number % maxDigitsNumber) / maxDigitsNumber)]);
        result.push(numbersMapping[maxDigitsNumber]);
    }

    number %= maxDigitsNumber;
    if (number > 20){
        result.push(numbersMapping[number - number % 10]);
        number %= 10;
    }

    if (number){
        result.push(numbersMapping[number]);
    }

    return result.join(" ");
}
