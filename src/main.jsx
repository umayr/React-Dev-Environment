var React = require('react');
var ReactDOM = require('react-dom');
var Panel = require('./components/panel.jsx');

ReactDOM.render(<Panel title="20" content="New followers added this month" firstLineWeight="1"/>, document.getElementById('basicPanel1'));
ReactDOM.render(<Panel title="$1250" content="Average Montly Income"/>, document.getElementById('basicPanel2'));
ReactDOM.render(<Panel title="$13865" content="Yearly Income Goal"/>, document.getElementById('basicPanel3'));
ReactDOM.render(<Panel title="18" content="Paris" color="orange"  textcolor="white"/>, document.getElementById('basicPanel4'));
