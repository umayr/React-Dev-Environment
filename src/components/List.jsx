var React = require('react');
var ListItem = require('./ListItem.jsx');

<<<<<<< HEAD
var List = React.createClass({
    render: function() {

        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text} />;
        };

        return (<ul>{this.props.items.map(createItem)}</ul>);
    }
});

=======
var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

var List = React.createClass({
  render:function(){
      var listItems = ingredients.map(function(item){
          return <ListItem key={item.id} ingredient={item.text} />;
      });
      return (<ul>{listItems}</ul>);
  }
});
>>>>>>> b8df889db42223c31dde7ca3853aed94bdfb8500
module.exports = List;
