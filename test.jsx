var React = require('react');



var Test = React.createClass({
  render: function () {
    return <button>{this.props.children}</button>;
  }
});


module.exports = Test;