import React from 'react'
import { Content } from '../Content';

export const MultipleChoiceQuestion = ({question}) => {
    console.log(question);
  const {answer, contentOfQuestion, expectedTime, expectedTimeVariation, explanation, questionId} = question;
  return (
    <div>
        <Content content={contentOfQuestion}/>
    </div>
  )
}
