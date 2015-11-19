// 定义一个头像avatar的组件
'use strict';

var Avatar = React.createClass({
  displayName: 'Avatar',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(ProfilePic, { username: this.props.username }),
      React.createElement(ProfileLink, { username: this.props.username })
    );
  }
});

// 定义一个人物图片ProfilePic组件
var ProfilePic = React.createClass({
  displayName: 'ProfilePic',

  render: function render() {
    return React.createElement('img', { src: 'http://graph.facebook.com/' + this.props.username + '/picture' });
  }
});

// 定义一个人物链接ProfileLink组件
var ProfileLink = React.createClass({
  displayName: 'ProfileLink',

  render: function render() {
    return React.createElement(
      'a',
      { href: 'http://www.facebook.com/' + this.props.username },
      this.props.username
    );
  }
});

// 渲染到容器
ReactDOM.render(React.createElement(Avatar, { username: 'pwh' }), document.getElementById('example'));