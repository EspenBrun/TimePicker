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

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

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
      <div>
        <div style={modalStyle}>
          <p>lol</p>

          {this.props.children}
        </div>
        {!this.props.noBackdrop &&
            <div style={backdropStyle}
                 onClick={e => this.close(e)}/>}
      </div>
    )
  }

});

module.exports = Modal;