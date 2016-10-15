var React = require('react');
var Modal = require('./Modal.jsx');
import TimepickerExample from './TimepickerExample.jsx';

var TimeField = React.createClass({

	

	getInitialState: function(){
		return {isModalOpen: false};
	},

	openModal: function(){
		this.setState({isModalOpen: true});
	},

	closeModal: function(){
		this.setState({isModalOpen: false});
	},


	render: function(){

		var stringProps = JSON.stringify(this.props);
		var stringState = JSON.stringify(this.state);

		return (
			<div>
				<p>TimeField props: {stringProps}</p>
				<p>TimeField state: {stringState}</p>
			
				<button onClick={() => this.openModal()}>00:00</button>
				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
					<h3>00:00</h3>
					<p>timepicke</p>
					<TimepickerExample />
					<p>
						<button onClick={() => this.closeModal()}>Close</button>
					</p>
			</Modal>
			</div>
			
		)		
	}
});

module.exports = TimeField;
