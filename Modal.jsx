var React = require('react');

// This component creates the popup Modal when the timeField is clicked
var Modal = React.createClass({

// the event handler for onClick on the backdrop, closes the backdrop
  close: function() {
      this.props.onClose();
  },
 
  render: function(){
    if (this.props.isOpen === true){
      
      // if the Modal should open, render the children
      // and render the backdrop and children
      return (
        <div>
          <div id="modalStyle">{this.props.children}</div>   
          <div id="backdropStyle" onClick={this.close}/>
        </div>
      )
    }
    else{
      // if the Modal should not open, return null.
      // returning null tells React that I do not want anything rendered
      return null; 
    }
  }

});

module.exports = Modal;