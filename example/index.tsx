import * as React from 'react';
import { hydrate } from 'react-dom';

import { Flashcard } from '../src/Flashcard';

const Demo = () => (
    <Flashcard
        front={<p>Front</p>}
        back={<p>Back</p>}
    />
)

hydrate(<Demo />, document.getElementById('example'));
