import { MathComponent } from 'mathjax-react';
import React from 'react'
import { Piece } from "../data/Classes/Question/Piece"
import { MultipleChoice } from './Inputs/MultipleChoice';

export const PieceComponent = ({piece, input=null, setInput=null}) => {

    // console.log(piece);

    const handleInput = (answer) => {
        const newInput = {};
        newInput[piece.value.inputId] = ((answer instanceof Object) ? answer.value : answer);
        setInput(input => ({
            ...input, 
            ...newInput
        }));
    }

    const type = piece.type;
    if (type === 'p') {
        return <p>{piece.value}</p>
    } 
    else if (type === 'h1') {
        return <h1>{piece.value}</h1>
    }
    else if (type === 'h2') {
        return <h2>{piece.value}</h2>
    }
    else if (type === 'h3') {
        return <h3>{piece.value}</h3>
    }
    else if (type === 'h4') {
        return <h4>{piece.value}</h4>
    }
    else if (type === 'Math') {
        return <MathComponent tex={piece.value} />
    }
    
    else if (type === 'MultipleChoice') {
        return <MultipleChoice data={piece.value} handleInput={handleInput} />
    }
}
