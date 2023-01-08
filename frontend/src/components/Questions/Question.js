import React, { useEffect, useState } from 'react'
import { ContentComponent } from '../ContentComponent';

//This component is responsible for rendering the question and also the logic behind the question
//It should pass the content of the question to a Content component to display the question
//And it should look at the data that is returned (set by user input) and have logic to check it
  //To do this, an input object will be passed to content to be passed to the input pieces so that when input is given, it will set the state (i.e. what the user has answered)
export const Question = ({question}) => {
  const {answer, contentOfQuestion, expectedTime, expectedTimeVariation, explanation, questionId} = question;
  const [input, setInput] = useState({});

  // useEffect(()=>{
  //   console.log("input: ", input);
  // }, [input])


  //Look for inline math and set its previous element to display inline
    //Note this has to be done in javascript because CSS doesn't contain a previous sibling selector...
  useEffect(()=>{

    //Delay by 1 second so that math can load
    setTimeout(() => {
      const spans = document.getElementsByTagName("span");
      for (let i=0;i<spans.length;i++) {
        const span = spans[i];
        if (span.children && span.children[0] && span.children[0].classList.contains("MathJax")) {
          if (span.previousElementSibling.tagName == 'P') {
            span.previousElementSibling.classList.add("inline")
          }
          if (span.nextElementSibling.tagName == 'P') {
            span.nextElementSibling.classList.add("inline");
          }
        }
      }
    }, "50");
  }, [])

  const handleSubmission = () => {
    console.log(answer);
    console.log(input);
    answer.forEach((question) => {
      const inputIdToLookFor = question.inputId;
      const answerToQuestion = question.answer;
      console.log(answerToQuestion == input[inputIdToLookFor]);
    })
  }

  return (
    <div>
        <ContentComponent content={contentOfQuestion} input={input} setInput={setInput}/>
        <button className="btn" onClick={()=>handleSubmission()}>Submit</button>
    </div>
  )
}
