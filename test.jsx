var React = require('react');



var Test = React.createClass({
	
	// set default props. Props can be changed from outside
	getDefaultProps: function(){
		return{
			minutes: 0,
			size: 300,
			radius: 100

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

        for (var i=0; i < positions.length; ++i) {
            // get position
            x = positions[i][0];
            y = positions[i][1];

            // dont think I need these yet
            // onClick     = this.onClickMinute(i);
            // onMouseMove = this.onMouseMoveMinute(i);

            // conditional text element to be used inside JSX
            // If minutes divide by 5, make text with the minutes
            // Else make a circle of radius 10
            var textElement = (i%5==0 ? <text x={x} y={y}>{i}</text> : <circle cx={x} cy={y} r="10"></circle>);

            // Bubbles with numbers that does divide by 5
            // 		is given an addition of ' small' in their classNames.
            // The bubble that has the same value as minues, which is saved in the state,
            //		is given an additioan of ' active' in its className
            // This allows for separate styling!
            // The size is determined by first checking if devideable by 5.
            // These get a radius of 15
            // Other bubles get radii 0, unless the bubble is selected.
            // Then the bubble is small, radius 5.
            bubbles.push(
            	<g 	key={i}
            		className=	{'timepicker-bubble' + (i%5==0 ? '' : ' small') + (minutes===i ? ' active' : '')}>
            		<circle cx={x} cy={y} r={ i%5==0 ? 15 : (minutes === i ? 5 : 0) }/>
            		{textElement}            		
            	</g>
            );
        }

        return bubbles; 
    },

    render: function () {
        var size = this.props.size;
        //var mode = this.state.mode;

        return (
        	<svg width={size} height={size}>
        		<g className="timepicker-visible">
        			{this.renderMinutesBubbles()}
        		</g>
        	</svg>
        );
    },

});


module.exports = Test;
//this is a comment dd ore ssssssss