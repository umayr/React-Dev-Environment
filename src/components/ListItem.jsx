var React = require('react');
<<<<<<< HEAD

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

=======
var ListItem = React.createClass({
  render: function(){
    return(
      <li>
            <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});
>>>>>>> b8df889db42223c31dde7ca3853aed94bdfb8500
module.exports = ListItem;
