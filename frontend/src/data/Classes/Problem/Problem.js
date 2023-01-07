// const Algebra2Problem1 = {
//     "problemType": "single",
//     "questions": [Algebra2Question1],
//     "toShuffle": "false",
// }

export class Problem {
    constructor(problemType, questions, problemId) {
        this.problemType = problemType;
        this.questions = questions;
        this.problemId = problemId;
    }
}