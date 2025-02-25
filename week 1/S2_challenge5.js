function challenge5(text) {
    count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count++;
        }
    }
    return count + 1;
}
// text = "hello world"

// text = "this is the best day"

text = "a bb ccc ddddddd e"

console.log(challenge5(text));
