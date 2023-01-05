// const Algebra2Problem1 = {
//     "problemType": "single",
//     "questions": [Algebra2Question1],
//     "toShuffle": "false",
// }

class Problem {
    constructor(problemType, questions, toShuffle=true) {
        this.problemType = problemType;
        this.questions = questions;
        this.toShuffle = toShuffle;
    }
}