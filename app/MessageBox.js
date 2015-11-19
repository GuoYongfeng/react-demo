var MessageBox = React.createClass({
    getInitialState:function(){
        return {
            count: 0,
        }
    },
    getDefaultProps:function(){
    console.log('getDefaultProps');
    },
    componentWillMount:function(){
    console.log('componentWillMount');
    },
    componentDidMount:function(){
    console.log('componentDidMount');
    },
  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  },
    shouldComponentUpdate:function(nextProp,nextState){
        console.log('shouldComponentUpdate');
        if(nextState.count > 10) return false;

        return true;
    },
    componentWillUpdate:function(nextProp,nextState){
        console.log('componentWillUpdate');
    },
    componentDidUpdate:function(){
        console.log('componentDidUpdate');
    },
    killMySelf: function(){
        React.unmountComponentAtNode(  document.getElementById('app') );
    },
    doUpdate:function(){
        this.setState({
            count: this.state.count + 1,
        });
    },
    render:function(){
        console.log('渲染')
        return (
            <div>
                <h1 > 计数： {this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
                <button onClick={this.doUpdate}>手动更新一下组件（包括子组件）</button>
                <Submessage count={this.state.count}/>
            </div>
        )
    }
});

var Submessage = React.createClass({
    componentWillReceiveProps:function(nextProp){
        console.log('子组件将要获得prop');
    },
    shouldComponentUpdate:function(nextProp,nextState){
        if(nextProp.count> 5) return false;
        return true;
    },
    render:function(){
        return (
            <h3>当前计数是：{this.props.count}</h3>
        )
    }
});


ReactDOM.render( <MessageBox/>, document.getElementById('app') );
