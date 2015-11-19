// demo: jsx_compile.html

var Counter = React.createClass({
  // 相当于是规范化的接口文档
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  // 定义初始化的state
  getInitialState: function () {
    return { clickCount: 0 };
  },
  // 定义一个处理点击的回调方法
  handleClick: function () {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1};
    });
  },
  render: function () {
    return (<h2 onClick={this.handleClick}>点我点我! <br />被戳次数: {this.state.clickCount}</h2>);
  }
});

ReactDOM.render(
  <Counter name="myCounter" />,
  document.getElementById('example')
);
