// 定义一个组件LikeButton
var LikeButton = React.createClass({
  // 给state定义初始值
  getInitialState: function() {
    return {liked: true};
  },
  // click事件的处理函数
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? '稀罕' : '讨厌';
    return (
      <p onClick={this.handleClick}>
        我{text}你.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
