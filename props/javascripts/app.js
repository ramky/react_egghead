/** @jsx React.DOM */
var App = React.createClass({
  getDefaultProps: function(){
    return {
      txt: 'This is default text',
      cat: 10
    }
  },

  propTypes: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },

  render: function() {
    var txt = this.props.txt;
    return (
      <div>
        <b>BOLD</b>
        <h1>{txt}</h1>
      </div>
    )
  }
});
React.renderComponent(<App cat={5} />, document.body);
