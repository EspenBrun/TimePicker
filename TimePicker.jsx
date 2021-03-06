var React = require('react');



var TimePicker = React.createClass({

    // Set proptypes for expected props, to make for easier debugging 
    // Also serves as a visual guide inside this component of the props it will recieve
    propTypes: {
        hours: React.PropTypes.number,
        minutes: React.PropTypes.number,
        visible: React.PropTypes.bool,
        isModalOpen: React.PropTypes.bool,
        isDown: React.PropTypes.bool,
        onDown: React.PropTypes.func,
        onMove: React.PropTypes.func,
        onUp: React.PropTypes.func
    },
	
	// set default props. Props can be changed from outside
    getDefaultProps: function(){
		return{
			size: 300,
			radius: 100,
            bubbleSize: .15*100 //15% of radius
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
	// For loop is copypasta (just trigonomtry I know I can do) and moving to the middle of size
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

    // Eventhandlers for pressing, moving and releasing
    handleDown: function(e){
        var visible = this.props.visible;
      
        if(visible == true){
            var iMinute = this.props.minutes;
            var iHour = Number(e.target.getAttribute("class"));
            this.props.onDown(iHour,iMinute);
        }else{
            var iHour = this.props.hours;
            var iMinute = Number(e.target.getAttribute("class"));
            this.props.onDown(iHour,iMinute); 
        }
    },

    handleMove: function(e){
        var visible = this.props.visible;

        if(visible == true){
            var iMinute = this.props.minutes;
            var iHour = Number(e.target.getAttribute("class"));
            this.props.onMove(iHour,iMinute);
        }else{
            var iHour = this.props.hours;
            var iMinute = Number(e.target.getAttribute("class"));
            this.props.onMove(iHour,iMinute); 
        }
    },

    handleUp: function(e){
        var visible = this.props.visible;
      
        if(visible == true){
            var iMinute = this.props.minutes;
            var iHour = Number(e.target.getAttribute("class"));
            this.props.onUp(iHour,iMinute);
        }else{
            var iHour = this.props.hours;
            var iMinute = Number(e.target.getAttribute("class"));
            this.props.onUp(iHour,iMinute); 
        }
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
            // The classname of {i} is used to get the value of i from the event object
            // Not ideal, since it is possible to click bubble, text and line, and it is possible to other elemts as well
            // Workaround since I cant use bind, which is not supported for KitKat and iOS8
            var textLine = i%5==0 ? <text className={i} x={x} y={y}>{i}</text> : <line className={i} x1={size/2} y1={size/2} x2={x} y2={y} />;
            var lineBubble = i%5==0 ? <line className={i} x1={size/2} y1={size/2} x2={x} y2={y} /> : <circle className={i} cx={x} cy={y} r="10"></circle>;

            // Bubbles with numbers that does divide by 5
            // 		is given an addition of ' small' in their classNames.
            // The bubble that has the same value as minues, which is saved in the state,
            //		is given an additioan of ' active' in its className
            // This allows for separate styling!
            // The size is determined by first checking if devideable by 5.
            // These get a radius of 15% of the timeface radius with this.props.bubbleSize
            // Other bubles get radii 0, unless the bubble is selected.
            // Then the bubble is small, radius 5% timeface radius.
            // Not sure why I need .bind(this,i), but googling errors gave this as a solution, and it works
            bubbles.push(
            	<g 	key={'m'+i}
            		className=	{'timepicker-bubble' + (i%5==0 ? '' : ' small') + (minutes===i ? ' active' : '')}
                    onMouseDown={this.handleDown}
                    onTouchStart={this.handleDown}
                    onMouseMove={this.handleMove}
                    onTouchMove={this.handleMove}
                    onMouseUp={this.handleUp}
                    onTouchEnd={this.handleUp}
                    >
            		<circle className={i} cx={x} cy={y} r={ i%5==0 ? this.props.bubbleSize : (minutes === i ? this.props.bubbleSize/3 : 0) }/>
                    {lineBubble}
            		{textLine}            		

            	</g>
            );
        }

        return bubbles; 
    },

    // Same procedure as for minutes, but all bubles same size, but different radius for hours 13-24
    renderHoursBubbles: function () {

        var hours = this.props.hours;
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
                    className={'timepicker-bubble' + (i<=12 ? '' : '00') + (hours===i ? ' active' : '')}
                    onMouseDown={this.handleDown}
                    onTouchStart={this.handleDown}
                    onMouseMove={this.handleMove}
                    onTouchMove={this.handleMove}
                    onMouseUp={this.handleUp}
                    onTouchEnd={this.handleUp}
                    >
                    <circle className={i} cx={x} cy={y} r={this.props.bubbleSize} />
                    <line className={i} x1={size/2} y1={size/2} x2={x} y2={y} />
                    <text className={i} x={x} y={y}>{i<=23 ? i : '00'}</text>            
                </g>
            );
        }
        return bubbles; 
    },

    render: function () {
        var size = this.props.size;
        var radius = this.props.radius;
        var timeface = <circle cx={.5*size} cy={.5*size} r={1.25*this.props.radius} id="timeface"/>;
        var timefacedot = <circle cx={.5*size} cy={.5*size} r="3" id="timefacedot"/>;

        // render both hours and minutes, but one invisible. Also a timeface.
        return (
        	<svg width={size} height={size}>
        		<g className={this.props.visible ? 'visible' : 'hidden'}>
                    {timeface}
                    {this.renderHoursBubbles()}
                    {timefacedot}
        		</g>            
                <g className={this.props.visible ? 'hidden' : 'visible'}>
                    {timeface}
                    {this.renderMinutesBubbles()}
                    {timefacedot}
                </g>
            </svg>
        );
    },

});


module.exports = TimePicker;
