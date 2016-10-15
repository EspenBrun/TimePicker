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

    // if the Modal should open, render the children. 
    // if the Modal should not open, return null.
    // returning null tells React that I do not want anything rendered
    if (this.props.isOpen === true){
      return (
        <div>
          <div id="modalStyle">
            {this.props.children}
          </div>   
          <div id="backdropStyle" onClick={e => this.close(e)}/>
        </div>
      )
    }
    else{
      return null; 
    }
  }

});

module.exports = Modal;