var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo-List" />, document.getElementById('ToDo'));
ReactDOM.render(<ListManager title="Christmas List" headingColor="#b31217"/>, document.getElementById('Christmas'));
