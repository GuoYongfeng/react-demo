// 该表单组件里面用到了RadioButtons和Checkboxes
'use strict';

var FormApp = React.createClass({
    displayName: 'FormApp',

    getInitialState: function getInitialState() {
        return {
            inputValue: '请输入...',
            selectValue: 'A',
            radioValue: 'B',
            checkValues: [],
            textareaValue: '请输入...'
        };
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var formData = {
            input: this.refs.goodInput.getDOMNode().value,
            select: this.refs.goodSelect.getDOMNode().value,
            textarea: this.refs.goodTextarea.getDOMNode().value,
            radio: this.state.radioValue,
            check: this.state.checkValues
        };

        console.log('the form result is:');
        console.log(formData);

        this.refs.goodRadio.saySomething();
    },
    handleRadio: function handleRadio(e) {
        this.setState({
            radioValue: e.target.value
        });
    },
    handleCheck: function handleCheck(e) {
        var checkValues = this.state.checkValues.slice();
        var newVal = e.target.value;
        var index = checkValues.indexOf(newVal);
        if (index == -1) {
            checkValues.push(newVal);
        } else {
            checkValues.splice(index, 1);
        }

        this.setState({
            checkValues: checkValues
        });
    },
    render: function render() {
        return React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement('input', { ref: 'goodInput', type: 'text', defaultValue: this.state.inputValue }),
            React.createElement('br', null),
            '选项：',
            React.createElement(
                'select',
                { defaultValue: this.state.selectValue, ref: 'goodSelect' },
                React.createElement(
                    'option',
                    { value: 'A' },
                    'A'
                ),
                React.createElement(
                    'option',
                    { value: 'B' },
                    'B'
                ),
                React.createElement(
                    'option',
                    { value: 'C' },
                    'C'
                ),
                React.createElement(
                    'option',
                    { value: 'D' },
                    'D'
                ),
                React.createElement(
                    'option',
                    { value: 'E' },
                    'E'
                )
            ),
            React.createElement('br', null),
            React.createElement(
                'p',
                null,
                'radio button!'
            ),
            React.createElement(RadioButtons, { ref: 'goodRadio', handleRadio: this.handleRadio }),
            React.createElement('br', null),
            React.createElement(Checkboxes, { handleCheck: this.handleCheck }),
            React.createElement('br', null),
            React.createElement('textarea', { defaultValue: this.state.textareaValue, ref: 'goodTextarea' }),
            React.createElement(
                'button',
                { type: 'submit' },
                '提交'
            )
        );
    }
});

// 定义单选框按钮组
var RadioButtons = React.createClass({
    displayName: 'RadioButtons',

    saySomething: function saySomething() {
        alert("yo what's up man!");
    },
    render: function render() {
        return React.createElement(
            'span',
            null,
            'A',
            React.createElement('input', { onChange: this.props.handleRadio, name: 'goodRadio', type: 'radio', value: 'A' }),
            'B',
            React.createElement('input', { onChange: this.props.handleRadio, name: 'goodRadio', type: 'radio', defaultChecked: true, value: 'B' }),
            'C',
            React.createElement('input', { onChange: this.props.handleRadio, name: 'goodRadio', type: 'radio', value: 'C' })
        );
    }
});

var Checkboxes = React.createClass({
    displayName: 'Checkboxes',

    render: function render() {
        return React.createElement(
            'span',
            null,
            'A',
            React.createElement('input', { onChange: this.props.handleCheck, name: 'goodCheckbox', type: 'checkbox', value: 'A' }),
            'B',
            React.createElement('input', { onChange: this.props.handleCheck, name: 'goodCheckbox', type: 'checkbox', value: 'B' }),
            'C',
            React.createElement('input', { onChange: this.props.handleCheck, name: 'goodCheckbox', type: 'checkbox', value: 'C' })
        );
    }
});

ReactDOM.render(React.createElement(FormApp, null), document.getElementById('app'));