var React = require('react');

var Test2 = React.createClass({
	scream: function () {
    return alert('alarm alarm');
  },

  render: function () {
  	//var stringProps = JSON.stringify(this.props);
    var x = 5;
    var textElement = (x==10 ? <p>the statement was true</p> : <p>the statement was false</p>);

    return (
      <div>
        {textElement}
      </div>
    );
  }
});

module.exports = Test2;