/**
 * [createClass description]
 * @param  {[type]} {               render: function( [description]
 * @return {[type]}   [description]
 */
var MyList = React.createClass({
  render: function() {
    return (
      <ul>
        {
          this.props.list.map(function (child) {
            return <li>{child}</li>
          })
        }
      </ul>
    );
  }
});

var TagList = [
  <a href="#">Facebook</a>,
  <a href="#">Google</a>
];

ReactDOM.render(
  <MyList list={TagList} />,
  document.getElementById('example')
);
