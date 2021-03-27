import React from 'react';
import {render} from 'react-dom'
import App from './App';
import Contact from './Context/ContactContext';

render(
    <Contact>
        <App/>
    </Contact>
    ,document.querySelector('#root'))