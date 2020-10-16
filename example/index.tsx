import * as React from 'react';
import { hydrate } from 'react-dom';

import { Flashcard } from '../src/Flashcard';

const Demo = () => (
    <Flashcard />
)

hydrate(<Demo />, document.getElementById('example'));
