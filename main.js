import React from 'react';
import ReactDOM from 'react-dom';

import TimepickerExample from './TimepickerExample.jsx';
import TimePicker from './TimePicker.jsx';
import TimeField from './TimeField.jsx'

ReactDOM.render(<TimepickerExample />, document.getElementById('timepicker-example'));
ReactDOM.render(<TimePicker />, document.getElementById('timepicker'));
ReactDOM.render(<TimeField />, document.getElementById('timefield'));




import Test from './Test.jsx';
//ReactDOM.render(<Test scream="Hello"/>, document.getElementById('test'));
ReactDOM.render(<Test>I am a child</Test>, document.getElementById('test'));

