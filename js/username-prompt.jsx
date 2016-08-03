

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var UsernamePrompt = React.createClass ({
    render: function() {
      return (
        <div>
          <form>
            <input placeholder="Player name" id="player-name"><input type="submit" id="submit-button">
          </form>
        </div>
      );
    }
});


var Container = connect()(UsernamePrompt);

module.exports = Container;
