import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { TextField, Button } from "@material-ui/core";

import { getEvent, putEvent, deleteEvent } from "../actions";

class EventsShow extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <TextField
        {...input}
        label={label}
        placeholder={label}
        type={type}
        error={touched && error}
        helperText={touched && error}
        fullWidth={true}
      />
    );
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = {
      margin: 12,
    };

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <div />
        <div>
          <Button
            style={style}
            variant={"raised"}
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            Submit
          </Button>
          <Button style={style} variant={"raised"} component={Link} to={"/"}>
            Cancel
          </Button>
          <Button
            style={style}
            variant={"raised"}
            component={Link}
            to={"/"}
            onClick={this.onDeleteClick}
          >
            Delete
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};

const mapDispatchToProps = { putEvent, deleteEvent, getEvent };

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";
  return errors;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
    EventsShow
  )
);
