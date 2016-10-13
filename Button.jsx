var React = require('react');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button className="uppercase" onClick={this.scream}>AAAAAH!</button>;
  }
});

module.exports = Button;