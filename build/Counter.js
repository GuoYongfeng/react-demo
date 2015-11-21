/**
 * [Counter]
 * @param  {Boolean}                  [description]
 * @param  {[type]}                   [description]
 * @param  {[type]}                   [description]
 * @return {[type]}                   [description]
 */
"use strict";

var Counter = React.createClass({
  displayName: "Counter",

  // 相当于是规范化的接口文档
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  // 定义初始化的state
  getInitialState: function getInitialState() {
    return { clickCount: 0 };
  },
  // 定义一个处理点击的回调方法
  handleClick: function handleClick() {
    this.setState(function (state) {
      return { clickCount: state.clickCount + 1 };
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        this.props.name
      ),
      React.createElement(
        "h2",
        { onClick: this.handleClick },
        "点我点我! ",
        React.createElement("br", null),
        "被戳次数: ",
        this.state.clickCount
      )
    );
  }
});

ReactDOM.render(React.createElement(Counter, { name: "myCounter" }), document.getElementById('example'));