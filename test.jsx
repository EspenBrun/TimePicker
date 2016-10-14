var React = require('react');



var Test = React.createClass({
  render: function () {
    console.log(this.props.children);
    return <button>{this.props.children}</button>;
  }
});


module.exports = Test;