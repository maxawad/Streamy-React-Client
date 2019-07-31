import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete ${
          this.props.stream ? `"${this.props.stream.title}"` : "this stream"
        }?`}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
