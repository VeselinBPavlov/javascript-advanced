class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores[0];
    }

    get topFiveScore() {
        return this.scores.slice(0, 5);
    }

    addScore(score) {
        if (!isNaN(score) && score !== null) {
            this.scores.push(+score);
            this.scores.sort((a, b) =>  b - a);
        }
        return this;
    }

    toString() {
        return `${this.nickName}: [${this.scores}]`;
    }
}



// Test.
let peter = new Player("Peter");
peter.addScore('114');
console.log('' + peter);

/*let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);*/
