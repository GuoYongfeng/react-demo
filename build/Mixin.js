// 组件间都需要用到的一段逻辑
// 经常写太麻烦，抽离出来公用
'use strict';

var stateRecordMixin = {
    componentWillMount: function componentWillMount() {
        this.oldStates = [];
    },
    componentWillUpdate: function componentWillUpdate(nextProp, nextState) {
        this.oldStates.push(nextState);
    },
    previousState: function previousState() {
        var index = this.oldStates.length - 1;
        return index == -1 ? {} : this.oldStates[index];
    }
};

// 定义一个组件MessageBox
var MessageBox = React.createClass({
    displayName: 'MessageBox',

    // 在这里使用mixin
    mixins: [stateRecordMixin],
    getInitialState: function getInitialState() {
        return {
            count: 0
        };
    },
    doUpdate: function doUpdate() {
        this.setState({
            count: this.state.count + 1
        });

        alert('上一次的计数是：' + this.previousState().count);
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
                { onClick: this.doUpdate },
                '手动更新一下组件（包括子组件）'
            ),
            React.createElement(Submessage, { count: this.state.count })
        );
    }
});

var Submessage = React.createClass({
    displayName: 'Submessage',

    mixins: [stateRecordMixin],
    getInitialState: function getInitialState() {
        return {
            count: 0
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProp) {
        this.setState({
            count: this.props.count * 2
        });
    },
    render: function render() {
        console.log('上一次子组件的计数是：' + this.previousState().count);
        return React.createElement(
            'h3',
            null,
            '当前子组件的计数是：',
            this.state.count
        );
    }
});

// 使用组件
ReactDOM.render(React.createElement(MessageBox, null), document.getElementById('example'));