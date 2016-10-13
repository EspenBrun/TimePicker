'use strict';
 
import React      from 'react';
import Timepicker from 'react-timepicker';
 
// Remember to include timepicker.css 

var TimepickerExample = React.createClass({
	onChange: function(hours,minutes){
		// ...
	},

	render: function(){
		return <Timepicker onChange={this.onChange} />
	}
});



module.exports = TimepickerExample;