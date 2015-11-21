// 定义一个按钮组件
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BootstrapButton = React.createClass({
  displayName: "BootstrapButton",

  render: function render() {
    console.log(this.props);
    return React.createElement("a", _extends({}, this.props, {
      href: "javascript:;",
      role: "button",
      className: (this.props.className || '') + ' btn' }));
  }
});
// 定义一个弹框组件
var BootstrapModal = React.createClass({
  displayName: "BootstrapModal",

  // 节点插入到真实的DOM，使用jquery
  componentDidMount: function componentDidMount() {
    // 调用bootstrap插件
    $(this.refs.root).modal({ backdrop: 'static', keyboard: false, show: false });
  },
  // 在组件销毁的时候，记得把之前绑定的方法给干掉
  componentWillUnmount: function componentWillUnmount() {
    $(this.refs.root).off('hidden', this.handleHidden);
  },
  close: function close() {
    $(this.refs.root).modal('hide');
  },
  open: function open() {
    $(this.refs.root).modal('show');
  },
  render: function render() {
    var confirmButton = null;
    var cancelButton = null;

    if (this.props.confirm) {
      confirmButton = React.createElement(
        BootstrapButton,
        {
          onClick: this.handleConfirm,
          className: "btn-primary" },
        this.props.confirm
      );
    }
    if (this.props.cancel) {
      cancelButton = React.createElement(
        BootstrapButton,
        { onClick: this.handleCancel, className: "btn-default" },
        this.props.cancel
      );
    }

    return React.createElement(
      "div",
      { className: "modal fade", ref: "root" },
      React.createElement(
        "div",
        { className: "modal-dialog" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "div",
            { className: "modal-header" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "close",
                onClick: this.handleCancel },
              "×"
            ),
            React.createElement(
              "h3",
              null,
              this.props.title
            )
          ),
          React.createElement(
            "div",
            { className: "modal-body" },
            this.props.children
          ),
          React.createElement(
            "div",
            { className: "modal-footer" },
            cancelButton,
            confirmButton
          )
        )
      )
    );
  },
  handleCancel: function handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleConfirm: function handleConfirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }
});

// 调用刚才咱们定义的两个组件，写咱们的业务组件
var Example = React.createClass({
  displayName: "Example",

  handleCancel: function handleCancel() {
    if (confirm('亲，确定要取消么')) {
      this.refs.modal.close();
    }
  },
  render: function render() {
    var modal = null;
    modal = React.createElement(
      BootstrapModal,
      {
        ref: "modal",
        confirm: "OK",
        cancel: "Cancel",
        onCancel: this.handleCancel,
        onConfirm: this.closeModal,
        title: "Hello, Bootstrap!" },
      "这是一个结合jQuery和Bootstrap而写的组件"
    );
    return React.createElement(
      "div",
      { className: "example" },
      modal,
      React.createElement(
        BootstrapButton,
        { onClick: this.openModal, className: "btn-default" },
        "Open modal"
      )
    );
  },
  openModal: function openModal() {
    this.refs.modal.open();
  },
  closeModal: function closeModal() {
    this.refs.modal.close();
  }
});

ReactDOM.render(React.createElement(Example, null), document.getElementById('example'));