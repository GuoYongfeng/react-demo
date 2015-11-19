// demo2：simple_jsx.html

var MyData = ['React', 'is', 'awesome'],
    MyStyles = {
      color: "#333",
      fontSize: "40px",
      fontWeight: "bold"
    };

ReactDOM.render(
  <div style={MyStyles}>
  {
    MyData.map(function (name) {
      return <span>{name} </span>
    })
  }
  </div>,
  document.getElementById('example')
);
