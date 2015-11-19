// 该表单组件里面用到了RadioButtons和Checkboxes
var FormApp = React.createClass({
    getInitialState:function(){
        return {
            inputValue: '请输入...',
            selectValue: 'A',
            radioValue:'B',
            checkValues:[],
            textareaValue:'请输入...'
        }
    },
    handleSubmit:function(e){
        e.preventDefault();
        var formData = {
            input: this.refs.goodInput.getDOMNode().value,
            select: this.refs.goodSelect.getDOMNode().value,
            textarea: this.refs.goodTextarea.getDOMNode().value,
            radio: this.state.radioValue,
            check: this.state.checkValues,
        }

        console.log('the form result is:')
        console.log(formData);

        this.refs.goodRadio.saySomething();

    },
    handleRadio:function(e){
        this.setState({
            radioValue: e.target.value,
        })
    },
    handleCheck:function(e){
        var checkValues = this.state.checkValues.slice();
        var newVal = e.target.value;
        var index = checkValues.indexOf(newVal);
        if( index == -1 ){
            checkValues.push( newVal )
        }else{
            checkValues.splice(index,1);
        }

        this.setState({
            checkValues: checkValues,
        })
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref="goodInput" type="text" defaultValue={this.state.inputValue }/>
                <br/>
                选项：
                <select defaultValue={ this.state.selectValue } ref="goodSelect">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>
                <p>radio button!</p>
                <RadioButtons ref="goodRadio" handleRadio={this.handleRadio} />
                <br/>

                <Checkboxes handleCheck={this.handleCheck} />
                <br/>
                <textarea defaultValue={this.state.textareaValue} ref="goodTextarea"></textarea>
                <button type="submit">提交</button>

            </form>
        )
    }
});

// 定义单选框按钮组
var RadioButtons = React.createClass({
    saySomething:function(){
        alert("yo what's up man!");
    },
    render:function(){
        return (
            <span>
                A
                <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
                B
                <input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B"/>
                C
                <input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
            </span>
        )
    }
});

var Checkboxes = React.createClass({
    render: function(){
        return (
            <span>
                A
                <input onChange={this.props.handleCheck}  name="goodCheckbox" type="checkbox" value="A"/>
                B
                <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
                C
                <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
            </span>
        )
    }
})


ReactDOM.render(<FormApp />, document.getElementById('app'));
