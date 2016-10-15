import React from 'react';
import ReactDOM from 'react-dom';


import Button from './Button.jsx';
import TimepickerExample from './TimepickerExample.jsx';
import TimePicker from './TimePicker.jsx';
import TimeField from './TimeField.jsx'

import Test from './Test.jsx';

ReactDOM.render(<Button />, document.getElementById('button'));
ReactDOM.render(<TimepickerExample />, document.getElementById('timepicker-example'));
ReactDOM.render(<TimePicker />, document.getElementById('timepicker'));
ReactDOM.render(<TimeField />, document.getElementById('timefield'));
//ReactDOM.render(<Test scream="Hello"/>, document.getElementById('test'));
ReactDOM.render(<Test>hello</Test>, document.getElementById('test'));

