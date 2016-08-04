var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var UsernamePrompt = React.createClass ({

  getName: function(event) {
    event.preventDefault();
    var userName = this.refs.userName.value;
    console.log(userName);
    this.props.dispatch(actions.fetchAddUser(userName));

  },

  render: function() {
    var status = '';
    if (this.props.statusMessage) {
      status = this.props.statusMessage;
    };

    return (
      <div>
        <form>
          <h4>{status}</h4>
          <input type="text" ref="userName" placeholder="Player name" id="player-name" required />
          <input type="submit" id="submit-button" onClick={this.getName} />
        </form>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    statusMessage: state.statusMessage
  }
}

var Container = connect(mapStateToProps)(UsernamePrompt);
module.exports = Container;
