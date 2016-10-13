import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import Button from './Button.jsx';
import TimepickerExample from './TimepickerExample.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Button />, document.getElementById('button'));
ReactDOM.render(<TimepickerExample />, document.getElementById('timepicker-example'));