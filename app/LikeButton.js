// 定义一个组件LikeButton
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: true};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? '爱' : '不爱';
    return (
      <p onClick={this.handleClick}>
        你{text}我.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
