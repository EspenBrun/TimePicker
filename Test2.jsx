var React = require('react');



var Test = React.createClass({
	scream: function () {
    var hello = {fiat: "car"};
    var stringStuff = JSON.stringify(hello);
    return alert(stringStuff);
  },

  render: function () {
  	//var stringProps = JSON.stringify(this.props);

    return (
      <button onClick={this.scream}>
        what up
      </button> 
    );
  }
});

module.exports = Test;