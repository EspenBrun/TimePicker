var React = require('react');



var TimePicker = React.createClass({

    // Set proptypes for expected props, to make for easier debugging 
    // Also serves as a visual guide inside this component of the props it will recieve
    propTypes: {
        hours: React.PropTypes.number,
        minutes: React.PropTypes.number,
        onChange: React.PropTypes.func,
        visible: React.PropTypes.bool,
        isModalOpen: React.PropTypes.bool
    },
	
	// set default props. Props can be changed from outside
    getDefaultProps: function(){
		return{
			size: 300,
			radius: 100,
            bubbleSize: 15 //15% of radius
		};
	}, 

    // set inital state. State can be changed from the inside
    getInitialState: function(){    
        return {
            minutesPos: this.calcMinutePositions(),
            hoursPos: this.calcHourPositions()
        };
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

    // Positions for the hours
    calcHourPositions: function () {
        var size   = this.props.size;
        var radius = this.props.radius;
        var positions = [];

        for (var i=1; i <= 24; ++i) {
            if(i<=12){
                positions.push([
                    Math.round(size / 2 + radius * Math.cos((i % 12 / 6 - 0.5) * Math.PI)),
                    Math.round(size / 2 + radius * Math.sin((i % 12 / 6 - 0.5) * Math.PI))
                ]);
            }
            else{
                positions.push([
                    Math.round(size / 2 + (radius-3*this.props.bubbleSize) * Math.cos((i % 12 / 6 - 0.5) * Math.PI)),
                    Math.round(size / 2 + (radius-3*this.props.bubbleSize) * Math.sin((i % 12 / 6 - 0.5) * Math.PI))
                ]);
            }
        }
        return positions;
    },

    // Making the eventHandler function that calls the function inside props, 
    //          which updates the state of timeField, specifically hours and minutes
    onChange: function(iHour,iMinute){
        this.props.onChange(iHour,iMinute);
    },
    
    // Ended up having two functions here, since I only pass one function from TimeField, 
    //      updates both hour and minute simulatneously
    // Should rather be made into two separate functions that are passed from TimeField
    handleClickHour: function(iHour){
        var iMinute = this.props.minutes;
        this.onChange(iHour,iMinute);
    },
    handleClickMinute: function(iMinute){
        var iHour = this.props.hours;
        this.onChange(iHour,iMinute);
    },

    // Making the bubbles that will contain the minutes on the timeface
    renderMinutesBubbles: function () {
        var minutes   = this.props.minutes;
        var positions  = this.state.minutesPos;
        var size = this.props.size;
        var x;
        var y;
        var bubbles = [];

        for (var i=0; i < positions.length; ++i) {
            // get position of a bubble
            x = positions[i][0];
            y = positions[i][1];

            // conditional text element to be used inside JSX
            // If minutes divide by 5, make text with the minutes and a line
            // Else make a line and a circle of radius 10
            // These two then return the two desired JSX elements in the correct order
            var textLine = i%5==0 ? <text x={x} y={y}>{i}</text> : <line x1={size/2} y1={size/2} x2={x} y2={y} />;
            var lineBubble = i%5==0 ? <line x1={size/2} y1={size/2} x2={x} y2={y} /> : <circle cx={x} cy={y} r="10"></circle>;
            // Bubbles with numbers that does divide by 5
            // 		is given an addition of ' small' in their classNames.
            // The bubble that has the same value as minues, which is saved in the state,
            //		is given an additioan of ' active' in its className
            // This allows for separate styling!
            // The size is determined by first checking if devideable by 5.
            // These get a radius of 15% of the timeface radius with this.state.bubbleSize
            // Other bubles get radii 0, unless the bubble is selected.
            // Then the bubble is small, radius 5% timeface radius.
            // Not sure why I need .bind(this,i), but googling errors gave this as a solution, and it works
            bubbles.push(
            	<g 	key={'m'+i}
            		className=	{'timepicker-bubble' + (i%5==0 ? '' : ' small') + (minutes===i ? ' active' : '')}
                    onClick={this.handleClickMinute.bind(this,i)}
                    >
            		<circle cx={x} cy={y} r={ i%5==0 ? this.state.bubbleSize : (minutes === i ? this.state.bubbleSize/3 : 0) }/>
                    {lineBubble}
            		{textLine}            		

            	</g>
            );
        }

        return bubbles; 
    },

    // Same procedure as for minutes, just simpler since all bubble will be the same size
    // Expand to 24 hour later
    renderHoursBubbles: function () {

        var hours   = this.props.hours;
        var positions = this.state.hoursPos;
        var size = this.props.size;
        var x;
        var y;
        var bubbles = [];        

        for (var i=1; i <= positions.length; ++i) {
            // get position of bubble
            x = positions[i-1][0];
            y = positions[i-1][1];
            
            bubbles.push(
                <g  key={'h'+i}
                    className=  {'timepicker-bubble' + (i<=12 ? '' : '00') + (hours===i ? ' active' : '')}
                    onClick={this.handleClickHour.bind(this,i)}
                    >
                    <circle cx={x} cy={y} r={this.state.bubbleSize} />
                    <line x1={size/2} y1={size/2} x2={x} y2={y} />
                    <text x={x} y={y}>{i<=23 ? i : '00'}</text>            
                </g>
            );
        }

        return bubbles; 
    },

    render: function () {
        var size = this.props.size;
        var radius = this.props.radius;
        var timeface = <circle cx={.5*size} cy={.5*size} r={1.25*this.props.radius} id="timeface"/>;

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
