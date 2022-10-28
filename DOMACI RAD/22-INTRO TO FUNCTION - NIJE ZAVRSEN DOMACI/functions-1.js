// 1 Zadatak Write a program that calculates the maximum of two given numbers.
function max2nmb(number1, number2) {
    if (number1 < number2) {
        max = number2;
    }
    else {
        max = number1;
    }
    return max;
}
console.log("1.Zadatak " + max2nmb(6, 5));
// 2.Zadatak Write a program that checks if a given number is odd.
function oddNumb(number3) {
    if (number3 % 2) {
        isOdd = true;
    }
    else {
        isOdd = false;
    }
    return isOdd;
}
console.log("2.Zadatak " + oddNumb(-45));
//Zadatak 3 Write a program that checks if a given
//number is a three digit long number.
function isthreeLN(number4) {
    if (number4 / 100 >= 1 && number4 / 1000 < 1) {
        threeDG = true;
    }
    else {
        threeDG = false;
    }
    return threeDG;
}
console.log("3.Zadatak " + isthreeLN(999));

// 4.	Write a program that calculates an arithmetic mean of four numbers.
function aritmeticMean(number5, number6, number7, number8) {
    n = (number5 + number6 + number7 + number8) / 4
    return n
}
console.log(aritmeticMean(2, 4, 6, 8));

// 5.	Write a program that draws a square of a given size.
// For example,  if the size of square is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****
function drawsAsquare(size) {
    for (i = 0; i < size; i++)
        square = "*"[i]
    return square;
    console.log(square)
}
