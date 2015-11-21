'use strict';

var MessageBox = React.createClass({
  displayName: 'MessageBox',

  getInitialState: function getInitialState() {
    return {
      count: 0
    };
  },
  getDefaultProps: function getDefaultProps() {
    console.log('getDefaultProps');
  },
  componentWillMount: function componentWillMount() {
    console.log('componentWillMount');
  },
  componentDidMount: function componentDidMount() {
    console.log('componentDidMount');
  },
  componentWillUnmount: function componentWillUnmount() {
    console.log('componentWillUnmount');
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate');
    if (nextState.count > 10) return false;

    return true;
  },
  componentWillUpdate: function componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate');
  },
  componentDidUpdate: function componentDidUpdate() {
    console.log('componentDidUpdate');
  },
  killMySelf: function killMySelf() {
    // 包括顶级容器一块干掉，当然在实际项目中可别干这样的傻事
    React.unmountComponentAtNode(document.getElementById('app'));
  },
  doUpdate: function doUpdate() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function render() {
    console.log('渲染');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        ' 计数： ',
        this.state.count
      ),
      React.createElement(
        'button',
        { onClick: this.killMySelf },
        '卸载掉这个组件'
      ),
      React.createElement(
        'button',
        { onClick: this.doUpdate },
        '手动更新一下组件（包括子组件）'
      ),
      React.createElement(Submessage, { count: this.state.count })
    );
  }
});

var Submessage = React.createClass({
  displayName: 'Submessage',

  componentWillReceiveProps: function componentWillReceiveProps(nextProp) {
    console.log('子组件将要获得prop');
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProp, nextState) {
    if (nextProp.count > 5) return false;
    return true;
  },
  render: function render() {
    return React.createElement(
      'h3',
      null,
      '当前计数是：',
      this.props.count
    );
  }
});

ReactDOM.render(React.createElement(MessageBox, null), document.getElementById('app'));