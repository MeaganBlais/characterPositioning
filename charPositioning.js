function countLetters(str) {
    let output = { };
    splitStr = str.split('').join('').toLowerCase();

    for (var i = 0; i < splitStr.length; i++) {
        var currChar = splitStr[i];
        if (output[currChar] === undefined) {
            var num = [i]; // try and clean this up more
            var convertedNum = num.toString();
            output[currChar] = convertedNum;
            // output[currChar] = [i]; // when using this in string form multiples of i are returned
        } else {
        //    output[currChar] = output[currChar] + ', ' + [i]
           output[currChar] += ', ' + [i];
        }
    }
        delete output[' '];
        return output;
}

console.log(countLetters('lighthouse in the house'));