import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.jsx';
import TimepickerExample from './TimepickerExample.jsx';
import TimeField from './TimeField.jsx';
import TimePicker from './TimePicker.jsx';

ReactDOM.render(<Button />, document.getElementById('button'));
ReactDOM.render(<TimepickerExample />, document.getElementById('timepicker-example'));
ReactDOM.render(<TimeField />, document.getElementById('timefield'));
ReactDOM.render(<TimePicker />, document.getElementById('timepicker'));
