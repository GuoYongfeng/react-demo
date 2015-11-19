// 定义一个组件LikeButton
'use strict';

var LikeButton = React.createClass({
  displayName: 'LikeButton',

  getInitialState: function getInitialState() {
    return { liked: true };
  },
  handleClick: function handleClick(event) {
    this.setState({ liked: !this.state.liked });
  },
  render: function render() {
    var text = this.state.liked ? '爱' : '不爱';
    return React.createElement(
      'p',
      { onClick: this.handleClick },
      '你',
      text,
      '我.'
    );
  }
});

ReactDOM.render(React.createElement(LikeButton, null), document.getElementById('example'));