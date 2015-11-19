// demo1：jsx_demo1.html

var MyList = React.createClass({
  render: function() {
    return (
      <ul>
        {
          /* 遍历this.props.children */
          this.props.children.map(function (child) {
            return <li>{child}</li>
          })
        }
      </ul>
    );
  }
});
ReactDOM.render(
  <MyList>
    <a href="https://www.facebook.com/">https://www.facebook.com/</a>
    <a href="https://twitter.com/">https://twitter.com/</a>
  </MyList>,
  document.getElementById('example')
);
