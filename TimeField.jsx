var React = require('react');

var TimeField = React.createClass({
	popup: function(){
		alert('it works');
	},

	render: function(){
		return (
			<button onClick={this.popup}>00:00 as</button>
		);
	}
});

module.exports = TimeField;