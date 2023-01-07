export class Question {
    constructor(contentOfQuestion, expectedTime,expectedTimeVariation,answer,explanation,questionId) {
        this.contentOfQuestion = contentOfQuestion;
        this.expectedTime = expectedTime;
        this.expectedTimeVariation = expectedTimeVariation
        this.answer = answer
        this.explanation = explanation
        this.questionId = questionId
    }

}