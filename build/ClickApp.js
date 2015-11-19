'use strict';

var ClickApp = React.createClass({
    displayName: 'ClickApp',

    getInitialState: function getInitialState() {
        return {
            clickCount: 0 };
    },
    handleClick: function handleClick(e) {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                '点击下面按钮'
            ),
            React.createElement(
                'button',
                { onClick: this.handleClick },
                '点击我'
            ),
            React.createElement(
                'p',
                null,
                '你一共点击了：',
                this.state.clickCount
            )
        );
    }
});

ReactDOM.render(React.createElement(ClickApp, null), document.getElementById('example'));