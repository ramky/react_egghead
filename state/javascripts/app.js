/** @jsx React.DOM */
var App = React.createClass({
  getInitialState: function(){
    return {
      txt: 'Ready'
    }
  },

  update: function(e){
    this.setState({txt: e.target.value});
  },

  render: function() {
    var txt = this.state.txt;
    return (
      <div>
        <input type="text" onChange={this.update} />
        <b>BOLD</b>
        <h1>{txt}</h1>
      </div>
    )
  }
});

React.renderComponent(<App />, document.body);
