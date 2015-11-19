// demo2：simple_jsx.html

'use strict';

var MyData = ['React', 'is', 'awesome'],
    MyStyles = {
  color: "#333",
  fontSize: "40px",
  fontWeight: "bold"
};

ReactDOM.render(React.createElement(
  'div',
  { style: MyStyles },
  MyData.map(function (name) {
    return React.createElement(
      'span',
      null,
      name,
      ' '
    );
  })
), document.getElementById('example'));