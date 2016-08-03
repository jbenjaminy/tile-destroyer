var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );
// DECIDE WHETHER OR NOT TO CONNECT TO PASS USER INPUT TO ACTIONS

var UsernamePrompt = React.createClass ({

  getName: function(event) {
    event.preventDefault();
    var userName = this.refs.userName.value;
  },
    render: function() {
      return (
        <div>
          <form>
            <input type="text" placeholder="Player name" id="player-name" required />
            <input type="submit" id="submit-button" onClick={this.getName} />
          </form>
        </div>
      );
    }
});


var Container = connect()(UsernamePrompt);

module.exports = Container;