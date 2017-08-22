var CommentList = React.createClass({
// Constructor
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
//Distructor
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {Store.comments().map(function(comment) {
          // return <Comment key={comment.id} rank={comment.rank} body={comment.body} author={comment.author} />;
          return <Comment key={comment.id} {...comment} />;
        })}
      </div>
    );
  },
  _onChange: function() {
    // re-renders component
    this.forceUpdate();
  }
});
