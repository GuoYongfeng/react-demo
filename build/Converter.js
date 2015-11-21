"use strict";

var converter = new showdown.Converter();

var MarkdownEditor = React.createClass({
  displayName: "MarkdownEditor",

  getInitialState: function getInitialState() {
    return { value: '# 我是一级大标题' };
  },
  handleChange: function handleChange() {
    this.setState({ value: this.refs.textarea.value });
  },
  conponentDidMount: function conponentDidMount() {
    console.log(this.refs.textarea);
  },

  render: function render() {
    // dangerouslySetInnerHTML这种功能主要用来与 DOM 字符串操作类库一起使用，
    // 所以提供的 HTML 必须要格式清晰
    console.log(converter.makeHtml(this.state.value));

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