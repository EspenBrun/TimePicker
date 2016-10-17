var React = require('react');



var Test = React.createClass({
	
	// set default props. Props can be changed from outside
    // If I don't have any animation when clock change from hour to minutes, 
    //      then I dont need size and radius in props or bubbleSize in state
	getDefaultProps: function(){
		return{
			minutes: 0,
            hours: 12,
			size: 300,
			radius: 100,
            visibilityHours: 'visible',
            visibilityMinutes: 'hidden'
                        

		    // mode: this.HOURS,
            // militaryTime: true
		};
	}, 

    // set inital state. State can be changed from the inside
    getInitialState: function(){    
        return {
            minutes: this.props.minutes,
            hours: this.props.hours,
            minutesPos: this.calcMinutePositions(),
            hoursPos: this.calcHourPositions(),
            bubbleSize: 15*this.props.radius/100
        };
    }, 

	// Calculate positions on a circle for each minute
	// Slightly modified, men for loop is copypaste (just trigonomtry I know I can do) and moving to the middle of size
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

    calcHourPositions: function () {
        var size   = this.props.size;
        var radius = this.props.radius;
        var positions = [];

        for (var i=1; i <= 12; ++i) {
            positions.push([
                Math.round(size / 2 + radius * Math.cos((i % 12 / 6 - 0.5) * Math.PI)),
                Math.round(size / 2 + radius * Math.sin((i % 12 / 6 - 0.5) * Math.PI))
            ]);
        }
        return positions;
    },

    renderMinutesBubbles: function () {
        var minutes   = this.state.minutes;
        var positions = this.state.minutesPos;
        var x;
        var y;
        var bubbles = [];
        //var onClick;
        //var onMouseMove;

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
            		<circle cx={x} cy={y} r={ i%5==0 ? this.state.bubbleSize : (minutes === i ? this.state.bubbleSize/3 : 0) }/>
            		{textElement}            		
            	</g>
            );
        }

        return bubbles; 
    },

    renderHoursBubbles: function () {
        var hours   = this.state.hours;
        var positions = this.state.hoursPos;

        var x;
        var y;

        //var onClick;
        //var onMouseMove;

        var bubbles = [];

        for (var i=1; i <= positions.length; ++i) {
            // get position
            x = positions[i-1][0];
            y = positions[i-1][1];

            // dont think I need these yet
            // onClick     = this.onClickMinute(i);
            // onMouseMove = this.onMouseMoveMinute(i);

            // Bubbles with numbers that does divide by 5
            //      is given an addition of ' small' in their classNames.
            // The bubble that has the same value as minues, which is saved in the state,
            //      is given an additioan of ' active' in its className
            // This allows for separate styling!
            // The size is determined by first checking if devideable by 5.
            // These get a radius of 15
            // Other bubles get radii 0, unless the bubble is selected.
            // Then the bubble is small, radius 5.

            bubbles.push(
                <g  key={i}
                    className=  {'timepicker-bubble' + (hours===i ? ' active' : '')}>
                    <circle cx={x} cy={y} r={this.state.bubbleSize}/>
                    <text x={x} y={y}>{i}</text>            
                </g>
            );
        }

        return bubbles; 
    },

    render: function () {
        var size = this.props.size;
        var radius = this.props.radius;
        //var mode = this.state.mode;

        // div added to see both hours and minutes
        return (
            <div>
        	<svg width={size} height={size}>
        		<g className={this.props.visibilityHours}>
                    <circle cx={.5*size} cy={.5*size} r={1.25*this.props.radius} id="timeface"/>
                    {this.renderHoursBubbles()}
        		</g>            
                <g className={this.props.visibilityMinutes}>
                    {this.renderMinutesBubbles()}
                </g>
            </svg>
            </div>
        );
    },

});


module.exports = Test;
//this is a comment dd ore ssssssssss