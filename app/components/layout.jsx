module.exports = React.createClass({
	getInitialState: function() {
		 return {
		 	url: 'http://seznam.com',
		 };
	},
	doSomethink: function(){
		alert(this.props.name);
	},
	render: function() {
		return <h1 onClick={this.doSomethink}>Hello {this.state.url}! </h1>;
	}
});