// 定义一个头像avatar的组件
"use strict";

var Avatar = React.createClass({
  displayName: "Avatar",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ProfilePic, { link: this.props.link }),
      React.createElement(ProfileLink, { name: this.props.name })
    );
  }
});

// 定义一个人物图片ProfilePic组件
var ProfilePic = React.createClass({
  displayName: "ProfilePic",

  render: function render() {
    return React.createElement("img", { src: this.props.link });
  }
});

// 定义一个人物链接ProfileLink组件
var ProfileLink = React.createClass({
  displayName: "ProfileLink",

  render: function render() {
    return React.createElement(
      "a",
      { href: 'https://github.com/' + this.props.name },
      this.props.name
    );
  }
});

// 渲染到容器
ReactDOM.render(React.createElement(Avatar, {
  name: "GuoYongfeng",
  link: "https://avatars2.githubusercontent.com/u/8686869?v=3&s=460"
}), document.getElementById('example'));