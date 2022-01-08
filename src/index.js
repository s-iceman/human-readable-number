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


let getDigit = (number, base) => Math.floor((number - number % base) / base);
let joinElements = (arr) => arr.join(" ");


module.exports = function toReadable(number){
    if (!number){ return numbersMapping[number]; }

    let result = [];
    if (number >= 100){
        result.push(numbersMapping[getDigit(number, 100)]);
        result.push(numbersMapping[100]);
    }

    number %= 100;
    if (!number){ return joinElements(result); }

    if (number < 20){
        result.push(numbersMapping[number]);
    }
    else {
        result.push(numbersMapping[number - number % 10]);
        number %= 10;
        if (number){
            result.push(numbersMapping[number]);
        }
    }

    return joinElements(result);
}
