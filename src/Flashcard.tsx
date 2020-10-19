import * as React from 'react';

interface IFlashcardProps { 
    id?: string
}

export const Flashcard: React.FC<IFlashcardProps> = (props) => {
    return <div id={props.id || "flashcard"}>
        Hello World!
    </div>;
};
