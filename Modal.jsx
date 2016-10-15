var React = require('react');

// This component creates the popup when the timeField is clicked

var Modal = React.createClass({

// isModalOpen controls if the modal is visible or not
// setting the initial state of the isModalOpen
  getInitialState: function(){
    return({ isModalOpen: false});
  },

// can call openModal or closeModal to change the state of isModalOpen
  openModal: function(){
    this.setState({ isModalOpen: true});
  },
  closeModal: function(){
    this.setState({ isModalOpen: false});
  },


// the render function
  render: function(){
    
    if (this.props.isOpen === false){
      return null;
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }
/*
    if (this.props.width && this.props.height) {
      modalStyle.width = this.props.width + 'px'
      modalStyle.height = this.props.height + 'px'
      modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
      modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
      modalStyle.transform = null
    }

    if (this.props.style) {
      for (let key in this.props.style) {
        modalStyle[key] = this.props.style[key]
      }
    }*/

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }


    return (
      <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
          {this.props.children}
        </div>
        {!this.props.noBackdrop &&
            <div className={this.props.backdropClassName} style={backdropStyle}
                 onClick={e => this.close(e)}/>}
      </div>
    )
  },  

  close: function(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

});

module.exports = Modal;