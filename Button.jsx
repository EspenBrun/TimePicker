var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!! lol');
  },

  render: function () {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
});

module.exports = Button;