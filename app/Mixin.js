// 组件间都需要用到的一段逻辑
// 经常写太麻烦，抽离出来公用
var stateRecordMixin = {
    componentWillMount:function(){
        this.oldStates = [];
    },
    componentWillUpdate: function(nextProp,nextState){
        this.oldStates.push(nextState);
    },
    previousState:function(){
        var index = this.oldStates.length -1;
        return index == -1 ? {} : this.oldStates[index];
    }
}

// 定义一个组件MessageBox
var MessageBox = React.createClass({
  // 在这里使用mixin
    mixins: [stateRecordMixin],
    getInitialState:function(){
        return {
            count: 0,
        }
    },
    doUpdate:function(){
        this.setState({
            count: this.state.count + 1,
        });

        alert('上一次的计数是：'+this.previousState().count)
    },
    render:function(){
        console.log('渲染');
        return (
            <div>
                <h1 > 计数： {this.state.count}</h1>
                <button onClick={this.doUpdate}>手动更新一下组件（包括子组件）</button>
                <Submessage count={this.state.count}/>
            </div>
        )
    }
});

var Submessage = React.createClass({
    mixins: [stateRecordMixin],
    getInitialState:function(){
        return {
            count: 0,
        }
    },
    componentWillReceiveProps:function(nextProp){
        this.setState({
            count: this.props.count *2,
        })
    },
    render:function(){
        console.log('上一次子组件的计数是：'+this.previousState().count )
        return (
            <h3>当前子组件的计数是：{this.state.count}</h3>
        )
    }
});

// 使用组件
ReactDOM.render( <MessageBox/>,
    document.getElementById('app')
)
