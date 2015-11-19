"use strict";

var converter = new Showdown.converter();

var MarkdownEditor = React.createClass({
  displayName: "MarkdownEditor",

  getInitialState: function getInitialState() {
    return { value: '请在此编辑md片段...' };
  },
  handleChange: function handleChange() {
    this.setState({ value: this.refs.textarea.getDOMNode().value });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "MarkdownEditor" },
      React.createElement(
        "h3",
        null,
        "输入"
      ),
      React.createElement("textarea", {
        onChange: this.handleChange,
        ref: "textarea",
        defaultValue: this.state.value }),
      React.createElement(
        "h3",
        null,
        "输出"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: {
          __html: converter.makeHtml(this.state.value)
        }
      })
    );
  }
});

ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('example'));