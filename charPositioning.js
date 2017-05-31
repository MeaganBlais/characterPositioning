function countLetters(str) {
    var output = { };
    splitStr = str.split(' ').join('').toLowerCase().split('')

    for (var i = 0; i < splitStr.length; i++) {
        var currChar = splitStr[i];
        if (output[currChar] === undefined) {
            output[currChar] = currChar[i]
        } else {
            output[currChar] = output[currChar] + currChar[i]
        }
    }
        return output;
}

console.log(countLetters('lighthouse in the house'));