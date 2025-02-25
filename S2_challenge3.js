function challenge3(array) {    
    let sum = 0;
    let average = 0;

    if (array.length === 0) {
        return 0; 
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }   
    average = sum / array.length;
    return average;
}

//user input
array = [85, 90, 78, 92];

// array = [10,20,30];

// array = [];
console.log(challenge3(array));
