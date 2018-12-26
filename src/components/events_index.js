import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { readEvents } from "../actions";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    };
    return (
      <React.Fragment>
        <Fab style={style} component={Link} to="/events/new">
          <AddIcon />
        </Fab>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderEvents()}</TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = { readEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
