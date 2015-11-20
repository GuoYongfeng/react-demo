
// 定义一个头像avatar的组件
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic link={this.props.link} />
        <ProfileLink name={this.props.name} />
      </div>
    );
  }
});

// 定义一个人物图片ProfilePic组件
var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.link} />
    );
  }
});

// 定义一个人物链接ProfileLink组件
var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'https://github.com/' + this.props.name}>
        {this.props.name}
      </a>
    );
  }
});

// 渲染到容器
ReactDOM.render(
  <Avatar
    name="GuoYongfeng"
    link="https://avatars2.githubusercontent.com/u/8686869?v=3&s=460"
  />,
  document.getElementById('example')
);
