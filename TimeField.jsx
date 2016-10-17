var React = require('react');
var Modal = require('./Modal.jsx');

import TimePicker from './TimePicker.jsx';

var TimeField = React.createClass({

	getInitialState: function(){
		return {
			isModalOpen: false,
			time: '01:00'};
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
				<button onClick={() => this.openModal()}>{this.state.time}</button>
				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
					<h3>{this.state.time}</h3>  
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


