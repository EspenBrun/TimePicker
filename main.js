import React from 'react';
import ReactDOM from 'react-dom';

import Timepicker from 'react-timepicker';
import TimeField from './TimeField.jsx'

import Test from './Test.jsx';


ReactDOM.render(<TimeField />, document.getElementById('timefield'));
ReactDOM.render(<Timepicker/>, document.getElementById('timepicker'));
   
ReactDOM.render(<Test />, document.getElementById('test'));
//ReactDOM.render(<Test scream="Hello"/>, document.getElementById('test'));
//ReactDOM.render(<Test>I am a child</Test>, document.getElementById('test'));

    	