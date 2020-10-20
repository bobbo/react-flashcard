import * as React from 'react';

interface IFlashcardProps { 
    id?: string;
    front: React.ReactNode;
    back: React.ReactNode;
}

enum FlashcardSide {
    FRONT,
    BACK
}

export const Flashcard: React.FC<IFlashcardProps> = (props) => {
    return <div id={props.id || "flashcard"}>
        Hello World!
    </div>;
};
