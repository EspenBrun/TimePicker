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

renderMinutesBubbles: function () {
        var minutes   = this.state.minutes;
        var positions = this.state.positionsMinutes;

        var x;
        var y;

        var onClick;
        var onMouseMove;

        var minute  = 0;
        var bubbles = [];

        for (; minute < positions.length; ++minute) {
            x = positions[minute][0];
            y = positions[minute][1];

            onClick     = this.onClickMinute(minute);
            onMouseMove = this.onMouseMoveMinute(minute);

            bubbles.push(React.createElement(
                'g',
                {
                    key: minute,

                    className: 'timepicker-bubble' + (minute % 5 !== 0 ? ' small' : '') + (minutes === minute ? ' active' : ''),

                    onClick:     onClick,
                    onMouseMove: onMouseMove
                },
                React.createElement('circle', { cx: x, cy: y, r: minute % 5 !== 0 ? minutes === minute ? 5 : 0 : 15 }),
                minute % 5 === 0 ? React.createElement(
                    'text',
                    { x: x, y: y },
                    minute
                ) : React.createElement('circle', { cx: x, cy: y, r: 10 })
            ));
        }

        return bubbles;
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