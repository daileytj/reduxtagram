import React from 'react';
import {render} from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main.js'

render(<Main><p>Hello</p></Main>, document.getElementById('root'));
