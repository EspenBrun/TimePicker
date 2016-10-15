var React = require('react');

// This component creates the popup Modal when the timeField is clicked

var Modal = React.createClass({

// the event handler for the onClick event on the backdrop
  close: function(e) {
    e.preventDefault(); //what does this do 

    if (this.props.onClose) { //what does this if mean? If a method, call the method?
      this.props.onClose();
    }
  },

// the render function
  render: function(){

    if (this.props.isOpen === true){
      // if the Modal should open, render the children
      // and render the backdrop
      // the backdrop is not a children, since it should have the modalStyle
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
      // if the Modal should not open, return null.
      // returning null tells React that I do not want anything rendered
      return null; 
    }
  }

});

module.exports = Modal;