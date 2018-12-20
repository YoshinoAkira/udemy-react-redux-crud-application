import React from "react";
import { connect } from "react-redux";

class EventsNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({ events: state.events });

// const mapDispatchToProps = { readEvents };

export default connect(
  null,
  null
)(EventsNew);
