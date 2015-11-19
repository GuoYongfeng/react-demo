// demo1：jsx_demo1.html

"use strict";

var MyList = React.createClass({
  displayName: "MyList",

  render: function render() {
    return React.createElement(
      "ul",
      null,

      /* 遍历this.props.children */
      this.props.children.map(function (child) {
        return React.createElement(
          "li",
          null,
          child
        );
      })
    );
  }
});
ReactDOM.render(React.createElement(
  MyList,
  null,
  React.createElement(
    "a",
    { href: "https://www.facebook.com/" },
    "https://www.facebook.com/"
  ),
  React.createElement(
    "a",
    { href: "https://twitter.com/" },
    "https://twitter.com/"
  )
), document.getElementById('example'));