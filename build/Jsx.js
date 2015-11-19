/**
 * [createClass description]
 * @param  {[type]} {               render: function( [description]
 * @return {[type]}   [description]
 */
"use strict";

var MyList = React.createClass({
  displayName: "MyList",

  render: function render() {
    return React.createElement(
      "ul",
      null,
      this.props.list.map(function (child) {
        return React.createElement(
          "li",
          null,
          child
        );
      })
    );
  }
});

var TagList = [React.createElement(
  "a",
  { href: "#" },
  "Facebook"
), React.createElement(
  "a",
  { href: "#" },
  "Google"
)];

ReactDOM.render(React.createElement(MyList, { list: TagList }), document.getElementById('example'));