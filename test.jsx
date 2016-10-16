var React = require('react');



var Test = React.createClass({
	
	// set default props. Props can be changed from outside
	getDefaultProps: function(){
		return{
			size: 300,
			radius: 125

		    // mode: this.HOURS,
            // hours:   0,
            // minutes: 0,
            // size:   300,
            // radius: 125,
            // militaryTime: true
		};
	}, 

	// Calculate positions on a circle for each minute
	// Slightly modified, men for loop is copypaste
    calcMinutePositions: function () {
    	var size   = this.props.size;
    	var radius = this.props.radius;

		var positions = [];

		for (var i=0; i < 60; ++i) {
		    positions.push([
		        Math.round(size / 2 + radius * Math.cos((i / 30 - 0.5) * Math.PI)),
		        Math.round(size / 2 + radius * Math.sin((i / 30 - 0.5) * Math.PI))
			]);
    	}

    	return positions;
	},

	// set inital state. State can be changed from the inside
	getInitialState: function(){
		return {
			minutePos: this.calcMinutePositions()
		};
	}, 

  render: function () {
    return (
      <button>
        what up
      </button> 
    );
  }
});


module.exports = Test;