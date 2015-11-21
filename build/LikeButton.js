// 定义一个组件LikeButton
'use strict';

var LikeButton = React.createClass({
  displayName: 'LikeButton',

  // 给state定义初始值
  getInitialState: function getInitialState() {
    return { liked: true };
  },
  // click事件的处理函数
  handleClick: function handleClick(event) {
    this.setState({ liked: !this.state.liked });
  },
  render: function render() {
    var text = this.state.liked ? '稀罕' : '讨厌';
    return React.createElement(
      'p',
      { onClick: this.handleClick },
      '我',
      text,
      '你.'
    );
  }
});

ReactDOM.render(React.createElement(LikeButton, null), document.getElementById('example'));