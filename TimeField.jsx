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
			minutes: 0};
	},

	openModal: function(){
		this.setState({
			isModalOpen: true,
			visible: true});
	},

	closeModal: function(){
		this.setState({
			isModalOpen: false,
			visible: true});
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

	render: function(){
		// Adding a zero infront of hour/minute if it only has one digit. For displaying
		var displayHours = this.state.hours>10 ? (this.state.hours==24 ? '00' : this.state.hours) : '0' + this.state.hours;
		var displayMinutes = this.state.minutes>10 ? this.state.minutes : '0' + this.state.minutes;

		// Renders the TimeField, which is just a button. 
		// This button opens the Modal, it's children are displayed, among them the TimePicker
		return (	
			<div>				
				<button onClick={() => this.openModal()} className="button-timefield">
					{displayHours}:{displayMinutes}
				</button>
				<Modal 
					isOpen={this.state.isModalOpen} 
					onClose={() => this.closeModal()}>
					<h1>{displayHours}:{displayMinutes}</h1>  
					<TimePicker 
					onChange={this.updateTime}
					visible={this.state.visible}
					isModalOpen={this.state.isModalOpen}
					hours={this.state.hours}
					minutes={this.state.minutes} /> 
					<button onClick={() => this.closeModal()} className="button-close">Close</button>
			</Modal>
			</div>
			
		)		
	}
});

module.exports = TimeField;


