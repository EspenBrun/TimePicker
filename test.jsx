var React = require('react');



var Test = React.createClass({
	
	// set default props. Props can be changed from outside
	getDefaultProps: function(){
		return{
			minutes: 0,
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
			minutes: this.props.minutes,
			minutesPos: this.calcMinutePositions()
		};
	}, 

renderMinutesBubbles: function () {
        var minutes   = this.state.minutes;
        var positions = this.state.minutesPos;

        var x;
        var y;

        var onClick;
        var onMouseMove;

        var bubbles = [];

        for (i=0; i < positions.length; ++i) {
            // get position
            x = positions[i][0];
            y = positions[i][1];

            // dont think I need these yet
            // onClick     = this.onClickMinute(i);
            // onMouseMove = this.onMouseMoveMinute(i);

            bubbles.push(React.createElement(
                'g',
                {
                    key: i,

                    className: 'timepicker-bubble' + (i % 5 !== 0 ? ' small' : '') + (minutes === i ? ' active' : ''),

                    // onClick:     onClick,
                    // onMouseMove: onMouseMove
                },
                React.createElement('circle', { cx: x, cy: y, r: i % 5 !== 0 ? minutes === i ? 5 : 0 : 15 }),
                i % 5 === 0 ? React.createElement(
                    'text',
                    { x: x, y: y },
                    i
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