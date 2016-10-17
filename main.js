import React from 'react';
import ReactDOM from 'react-dom';

import Timepicker from 'react-timepicker';
import TimeField from './TimeField.jsx'

import TimePicker from './TimePicker.jsx';
import Test2 from './Test2.jsx';


ReactDOM.render(<TimeField />, document.getElementById('timefield'));
ReactDOM.render(<Timepicker/>, document.getElementById('timepickerex'));
   
ReactDOM.render(<TimePicker />, document.getElementById('timepicker'));
ReactDOM.render(<Test2 />, document.getElementById('test2'));

    	