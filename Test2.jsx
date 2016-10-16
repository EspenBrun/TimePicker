var React = require('react');



var Test = React.createClass({
	scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
  	//var stringProps = JSON.stringify(this.props);

    return (
      <div>
        <button onClick={this.scream}>Click</button>
      </div>
    );
  }
});

module.exports = Test;