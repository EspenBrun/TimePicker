import React from 'react';
import ReactDOM from 'react-dom';

import Timepicker from 'react-timepicker';
import TimeField from './TimeField.jsx'
//import Test2 from './Test2.jsx';


ReactDOM.render(<TimeField />, document.getElementById('timefield1'));
ReactDOM.render(<TimeField />, document.getElementById('timefield2'));
ReactDOM.render(<TimeField />, document.getElementById('timefield3'));
ReactDOM.render(<Timepicker/>, document.getElementById('timepickerex'));
//ReactDOM.render(<Test2 />, document.getElementById('test2'));

    	