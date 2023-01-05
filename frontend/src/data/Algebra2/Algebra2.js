import QuestionTypes from "../Enums/QuestionTypes"

const expectedTime = 1000*60*3 // 3 minutes
const expectedTimeVariation = 1000*60 // 1 minute variation
const answerFormat = QuestionTypes.MultipleChoice;
const answer = "answerId-3"
const explanation = {

}
const additionalInfo = [{}]
const additionalInfoNames = []
const questionId = ""
const answerChoices = [{}] 
const questionOfEgg = ""

const Algebra2Question1 = new Question(expectedTime, expectedTimeVariation, answerFormat, answer, explanation, additionalInfo, additionalInfoNames, questionId, answerChoices, questionOfEgg)
const Algebra2Problem1 = new Problem("single", [Algebra2Question1], "false");