var React = require('react');



var Test = React.createClass({
	scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
  	var stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT ssMY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
});

module.exports = Test;

// Now, this has no properties!
// But then I do <Test myProp="hello" />
// Then that component instance has a props object:
// {"myProp":"hello"}