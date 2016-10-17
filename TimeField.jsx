var React = require('react');
var Modal = require('./Modal.jsx');

import TimePicker from './TimePicker.jsx';

var TimeField = React.createClass({

	getDefaultProps: function(){
		return{
			hours: '12',
			minutes: '00'
		};
	},

	getInitialState: function(){
		return {
			isModalOpen: false};
	},

	openModal: function(){
		this.setState({isModalOpen: true});
	},

	closeModal: function(){
		this.setState({isModalOpen: false});
	},

	updateTime: function(chosenTime){
		this.state.time = chosenTime;	
	},


	render: function(){
		return (	
			<div>				
				<button onClick={() => this.openModal()}>{this.props.hours}:{this.props.minutes}</button>
				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
					<h1>{this.props.hours}:{this.props.minutes}</h1>  
					<TimePicker /> 
					<p>
						<button onClick={() => this.closeModal()}>Close</button>
					</p>
			</Modal>
			</div>
			
		)		
	}
});

module.exports = TimeField;


