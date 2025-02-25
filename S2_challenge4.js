function challenge4(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (char === text[i]) {
            count = count + 1;
        }    
    }
    return count;
}
// text = "hello world";
// char = 'o';

text = "aaa bbb a"
char = 'a'

// text = "abc"
// char = 'd'

console.log(challenge4(text, char));
