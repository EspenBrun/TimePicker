var React = require('react');



var TimePicker = React.createClass({

    propTypes: {
        hours: React.PropTypes.number,
        minutes: React.PropTypes.number,
        onChange: React.PropTypes.func,
        visible: React.PropTypes.bool
    },
	
	// set default props. Props can be changed from outside
    getDefaultProps: function(){
		return{
			size: 300,
			radius: 100
            //visibilityHours: this.props.visible ? 'visible' : 'hidden',
            //visibilityMinutes: this.props.visible ?'hidden' : 'visible',
		};
	}, 

    // set inital state. State can be changed from the inside
    getInitialState: function(){    
        return {
            minutesPos: this.calcMinutePositions(),
            hoursPos: this.calcHourPositions(),
            bubbleSize: 15*this.props.radius/100 // Scaled relative to radius, so there is one less number to change if timeface needs different size
        };
    },

    onChange: function(iMinutes,iHours){
        this.props.onChange(iMinutes,iHours);
    },

	// Calculate positions on a circle for each minute
	// For loop is copypaste (just trigonomtry I know I can do) and moving to the middle of size
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

    // When an hourBubble is clicked, set the state to that hour.
    // Does not change props, so this.props.hours is still default.
    // But that's ok as long as I just use state when referring to currently selected hour
    handleClickHour: function(i){
        this.setState({hours: i});
        this.onChange(i,i);
    },

    renderMinutesBubbles: function () {
        var minutes   = this.props.minutes;
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
            // These get a radius of 15% of the timeface radius with this.state.bubbleSize
            // Other bubles get radii 0, unless the bubble is selected.
            // Then the bubble is small, radius 5% timeface radius.
            bubbles.push(
            	<g 	key={'m'+i}
            		className=	{'timepicker-bubble' + (i%5==0 ? '' : ' small') + (minutes===i ? ' active' : '')}>
            		<circle cx={x} cy={y} r={ i%5==0 ? this.state.bubbleSize : (minutes === i ? this.state.bubbleSize/3 : 0) }/>
            		{textElement}            		
            	</g>
            );
        }

        return bubbles; 
    },

    renderHoursBubbles: function () {

        var hours   = this.props.hours;
        var positions = this.state.hoursPos;
        var x;
        var y;

        //var onMouseMove;

        var bubbles = [];

        for (var i=1; i <= positions.length; ++i) {
            // get position
            x = positions[i-1][0];
            y = positions[i-1][1];

            // dont think I need these yet
            // onClick     = this.onClickHour(i);
            // onMouseMove = this.onMouseMoveHour(i);

            // The bubble that has the same value as hour, which is saved in the state,
            //      is given an addition of ' active' in its className
            
            bubbles.push(
                <g  key={'h'+i}
                    className=  {'timepicker-bubble' + (hours===i ? ' active' : '')}
                    onClick={this.handleClickHour.bind(this,i)}
                    >
                    <circle cx={x} cy={y} r={this.state.bubbleSize} />
                    <text x={x} y={y}>{i}</text>            
                </g>
            );
        }

        return bubbles; 
    },

    render: function () {
        var size = this.props.size;
        var radius = this.props.radius;
        var timeface = <circle cx={.5*size} cy={.5*size} r={1.25*this.props.radius} id="timeface"/>;
        //var mode = this.state.mode;

        // render both hours and minutes, but one invisible. Also a timeface.
        return (
        	<svg width={size} height={size}>
        		<g className={this.props.visible ? 'visible' : 'hidden'}>
                    {timeface}
                    {this.renderHoursBubbles()}
        		</g>            
                <g className={this.props.visible ? 'hidden' : 'visible'}>
                    {timeface}
                    {this.renderMinutesBubbles()}
                </g>
            </svg>
        );
    },

});


module.exports = TimePicker;
//this is a comment dd ore sssssssssss