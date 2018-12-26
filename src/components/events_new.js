import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Button, TextField } from "@material-ui/core";

import { postEvent } from "../actions";

class EventsNew extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    console.log(field);
    return (
      <div>
        <TextField
          type={type}
          label={label}
          error={touched && error}
          placeholder={label}
          {...input}
          fullWidth={true}
          helperText={touched && error}
        />
        {/* <input {...input} placeholder={label} type={type} /> */}
        {/* {touched && error && <span>{error}</span>} */}
      </div>
    );
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    console.log(submitting);

    const style = { margin: 12 };
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
        <div>
          <Button
            label="Submit"
            type="submit"
            variant={"raised"}
            disabled={pristine || submitting || invalid}
            style={style}
          >
            Submit
          </Button>
          <Button component={Link} to="/" variant={"raised"}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

//const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = { postEvent };

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";
  return errors;
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
