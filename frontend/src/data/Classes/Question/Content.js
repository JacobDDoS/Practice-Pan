//Used to store a list of Pieces (they come together to create content, such as a question or an explanation (for a problem))
//Example would be a list of pieces such that the first piece is a heading 1 that states "What is 2+2" and the second (and last) piece
//        would be a dropdown which consists of certain values which the user may select. 

export class Content {
    constructor(pieces) {
        this.pieces = pieces;
    }
}