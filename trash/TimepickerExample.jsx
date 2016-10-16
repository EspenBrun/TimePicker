'use strict';
 
import React      from 'react';
import Timepicker from 'react-timepicker';
 
// Remember to include timepicker.css 

var TimepickerExample = React.createClass({
	render: function(){
		//return <Timepicker onChange={this.onChange} />
		return <Timepicker />
	}
});



module.exports = TimepickerExample;