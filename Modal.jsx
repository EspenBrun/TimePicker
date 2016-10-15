var React = require('react');

// This component creates the popup when the timeField is clicked

var Modal = React.createClass({

  close: function(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  },

// the render function
  render: function(){

    //var stringProps = JSON.stringify(this.props);

    if (this.props.isOpen === false){
      return null;
    }

    return (
      <div>
        <div id="modalStyle">
          {this.props.children}
        </div>
        <div id="backdropStyle" onClick={e => this.close(e)}/>
      </div>
    )
  }

});

module.exports = Modal;