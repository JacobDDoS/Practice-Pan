import { Problem } from "../Classes/Problem/Problem"
import { Answer } from "../Classes/Question/Answer"
import { Content } from "../Classes/Question/Content"
import { Piece } from "../Classes/Question/Piece"
import { Question } from "../Classes/Question/Question"

const contentOfQuestion = new Content([
    new Piece("p", "What would be the equation of a circle located at (0, 4) with a radius of 5?"),
    new Piece("MultipleChoice", {
        "inputId": 3,
        "possibleAnswers": [new Piece("Math", "(x)^3-(y-4)^2=25"),new Piece("Math","(x)^2-(y+4)^2=25"),new Piece("Math","(x)^2-(y-4)^2=25"),new Piece("Math","(x)^2-(y-4)^2=5")]
    })
])
const expectedTime = 1000*60*3 // 3 minutes
const expectedTimeVariation = 1000*60 // 1 minute variation
const answer = [new Answer(3, "(x)^2-(y-4)^2=25")];
const explanation = new Content([new Piece("p", "This is because x stays the same and y goes up 4, meaning subtract 4")])

const questionId = "Question-0"

const Algebra2Question1 = new Question(contentOfQuestion, expectedTime,expectedTimeVariation,answer,explanation,questionId);
const Algebra2Problem1 = new Problem("single", [Algebra2Question1], 1);

export default Algebra2Problem1;