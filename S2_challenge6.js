function challenge6(votes) {
    if (votes.length === 0) {
        return 'There is not vote yet';
    }

    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'A') {
            aCount++;
        } else if (votes[i] === 'B') {
            bCount++;
        } else if (votes[i] === 'C') {
            cCount++;
        } else {
            console.log(`Invalid vote: ${votes[i]}`); // Handle invalid votes
        }
    }

    if (aCount === bCount && aCount > cCount) {
        return 'A and B are both winners.';
    } else if (aCount === cCount && aCount > bCount) {
        return 'A and C are both winners.';
    } else if (bCount === cCount && bCount > aCount) {
        return 'B and C are both winners.';
    } else if (aCount > bCount && aCount > cCount) {
        return 'A is the winner.';
    } else if (bCount > aCount && bCount > cCount) {
        return 'B is the winner.';
    } else if (cCount > bCount && cCount > aCount) {
        return 'C is the winner.';
    } else if (aCount === bCount && aCount === cCount && aCount !== 0) {
        return 'All three candidates are tied.';
    } else if (aCount === 0 && bCount === 0 && cCount === 0) {
        return 'There is not vote yet.';
    }
}

votes1 = ['A', 'B', 'A', 'C', 'A'];

votes2 = ['A', 'B', 'B', 'C', 'A'];

votes3 = [];

console.log(challenge6(votes1));
console.log(challenge6(votes2));
console.log(challenge6(votes3));
