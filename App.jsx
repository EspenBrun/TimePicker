var React = require('react');

var App = React.createClass({

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
		return (
			<div>
				<button onClick={() => this.openModal()}>Open Modal</button>
				<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
					<h1>Modal title</h1>
					<p>hello</p>
					<p>
						<button onClick={() => this.closeModal}>Close</button>
					</p>
				</Modal>
			</div>
		)		
	}
});

module.exports = App;
