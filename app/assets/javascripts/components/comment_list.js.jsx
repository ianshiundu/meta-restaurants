var CommentList = React.createClass({
// Constructor
  componentDidMount: function() {
    commentStore.addChangeListener(this._onChange);
  },
//Distructor
  componentWillUnmount: function() {
    commentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        {commentStore.comments().map(function(comment) {
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
