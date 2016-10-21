var React = require('react');
var Modal = require('./Modal.jsx');
var TimePicker = require('./TimePicker.jsx');

// This component controls most states and passes props
// Almost but not quite that this is a proper parent component
var TimeField = React.createClass({

	getInitialState: function(){
		return {
			isModalOpen: false,
			visible: true,
			hours: 12,
			minutes: 0,
			isDown: false
		};
	},

	openModal: function(){
		document.getElementById("bodyid").className = "disablescroll";

		this.setState({
			isModalOpen: true,
			visible: true});
	},

	closeModal: function(){
		document.getElementById("bodyid").className = "enablescroll";

		this.setState({
			isModalOpen: false,
			visible: true});
	},

	showHours: function(){
		this.setState({
			visible: true
		});
	},

	showMinutes: function(){
		this.setState({
			visible: false
		});
	},


	// eventHandler function that will be passed to the TimePicker, which will let that 
	//		component update this parent components state
	// When called, updates minutes and hours, and automatically shows minute timeface when hour is picked
	updateTime: function(iHour,iMinute){
		this.setState({
			visible: false,
			hours: iHour,
			minutes: iMinute});
	},

	handleDown: function(iHour,iMinute){
		this.setState({
			isDown: true,
			hours: iHour,
			minutes: iMinute
		});
	},

	handleMove: function(iHour,iMinute){
		if(this.state.isDown == true){
			this.setState({
				hours: iHour,
				minutes: iMinutes
			});
		}
	},

	handleUp: function(iHour,iMinute){
		this.setState({
			isDown: false,
			hours: iHour,
			minutes: iMinute,
			visible: false
		});
	},




	render: function(){
		// Adding a zero infront of hour/minute if it only has one digit. For displaying
		var displayHours = this.state.hours>=10 ? (this.state.hours==24 ? '00' : this.state.hours) : '0' + this.state.hours;
		var displayMinutes = this.state.minutes>=10 ? this.state.minutes : '0' + this.state.minutes;
		var hoursActive = this.state.visible ? "timeh1-active" : "timeh1-inactive";
		var minutesActive = this.state.visible ? "timeh1-inactive" : "timeh1-active";

		// Renders the TimeField, which is just a button. 
		// This button opens the Modal, it's children are displayed, among them the TimePicker
		return (	
			<div>				
				<button onClick={this.openModal} className="button-timefield">
					{displayHours}:{displayMinutes}
				</button>
				<Modal 
					isOpen={this.state.isModalOpen} 
					onClose={this.closeModal}>
					<h1 className="timeh1">
						<span className={hoursActive} onClick={this.showHours}>{displayHours}</span>
						:
						<span className={minutesActive} onClick={this.showMinutes}>{displayMinutes}</span>
					</h1>  
					<TimePicker
					onChange={this.updateTime}
					onDown={this.handleDown}
					onMove={this.handleMove}
					onUp={this.handleUp}
					visible={this.state.visible}
					isModalOpen={this.state.isModalOpen}
					isDown={this.state.isDown}
					hours={this.state.hours}
					minutes={this.state.minutes} /> 
					<button onClick={this.closeModal} className="button-close">Close</button>
			</Modal>
			</div>
			
		)		
	}
});
 
module.exports = TimeField;


