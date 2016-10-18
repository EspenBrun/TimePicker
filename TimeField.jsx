var React = require('react');
var Modal = require('./Modal.jsx');

import TimePicker from './TimePicker.jsx';

var TimeField = React.createClass({

	getInitialState: function(){
		return {
			isModalOpen: false,
			visible: true,
            //visibilityHours: this.props.visible ? 'visible' : 'hidden',
            //visibilityMinutes: this.props.visible ?'hidden' : 'visible',
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

	updateTime: function(iHour,iMinute){
		this.setState({
			visible: false,
			hours: iHour,
			minutes: iMinute});
	},




	render: function(){
		var displayHours = this.state.hours<10 ? '0' +  this.state.hours : this.state.hours;
		var displayMinutes = this.state.minutes<10 ? '0' + this.state.minutes : this.state.minutes;

		return (	
			<div>				
				<button onClick={() => this.openModal()}>{displayHours}:{displayMinutes}</button>
				<Modal 
				isOpen={this.state.isModalOpen} 
				onClose={() => this.closeModal()}>
					<h1>{displayHours}:{displayMinutes}</h1>  
					<TimePicker 
					onChange={this.updateTime}
					visible={this.state.visible}
					hours={this.state.hours}
					minutes={this.state.minutes} /> 
					<p>
						<button onClick={() => this.closeModal()}>Close</button>
					</p>
			</Modal>
			</div>
			
		)		
	}
});

module.exports = TimeField;


