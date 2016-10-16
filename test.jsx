var React = require('react');



var Test = React.createClass({
	getDefaultProps: function(){
		return{
			size: 10,
			radius: 100
		};
	},

    calculatePositionsMinutes: function () {
    	var size   = props.size;
    	var radius = props.radius;

		var index     = 0;
		var positions = [];

		for (; index < 60; ++index) {
		    positions.push([
		        Math.round(size / 2 + radius * Math.cos((index / 30 - 0.5) * Math.PI)),
		        Math.round(size / 2 + radius * Math.sin((index / 30 - 0.5) * Math.PI))
			]);
    	}

    	return positions;
	}

  render: function () {
    return <button>{this.calculatePositionsMinutes()}</button>;
  }
});


module.exports = Test;