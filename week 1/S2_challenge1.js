function challenge1(width, height) {
    let rectangleString = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangleString += '*';
        }
        if (i < height - 1) {
            rectangleString += '\n';
        }
    }
    return rectangleString;
}
// user input
console.log(challenge1(3, 4));
