/**
 * 定义组件MyComponent
 * @param  {[type]} {                 render: function ( [description]
 * @return {[type]}   [description]
 */
var MyComponent = React.createClass({
    render: function (){
      return (
        <h1 className="header">我的第一个组件</h1>
      )
    }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
