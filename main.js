
var React = require('react');
var ReactDOM = require('react-dom');

var TimeField = require('./TimeField.jsx');

import TimepickerEx from 'react-timepicker';
ReactDOM.render(<TimepickerEx />, document.getElementById('timepickerex'));
 
ReactDOM.render(<TimeField />, document.getElementById('timefield1'));
ReactDOM.render(<TimeField />, document.getElementById('timefield2'));
ReactDOM.render(<TimeField />, document.getElementById('timefield3'));

    	