var React = require('react');

var Panel = React.createClass({
  render:function(){

    var PanelStyle={
      marginTop:10
    }
    var lineOneStyle={

    }
    var lineTwoStyle={

    }
  // Allows user to select backgorund color
  if(this.props.color){
    PanelStyle.background = this.props.color;
  }
  // allow use to selct text color
  if(this.props.textcolor){
    PanelStyle.color = this.props.textcolor;
  }

  if(this.props.firstLineWeight){
    lineOneStyle.fontWeight  = this.props.firstLineWeight;
  }

// draws main panel
    return(
      <div style={PanelStyle} className ="panel panel-default col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1">
        <div className="row">
          <div className="col-md-12">
            <div style={lineOneStyle} className="row">
              <h3>{this.props.title}</h3>
            </div>
            <div style={lineTwoStyle} className="row">
              <h5><small>{this.props.content}</small></h5>
            </div>
          </div>
        </div>
      </div>
    );

  }

});
module.exports = Panel;
