import React, { useEffect } from 'react'
import { PieceComponent } from './PieceComponent'
export const ContentComponent = ({content, input=null, setInput=null}) => {
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
  return (
    <div>
        {
            content.pieces.map((piece, idx) => {
                return <PieceComponent piece={piece} input={input} setInput={setInput} key={`piece-${idx}-${piece.value}`}/>
            })
        }
    </div>
  )
}
