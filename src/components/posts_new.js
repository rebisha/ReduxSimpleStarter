import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;

        // ES6 refactoring which means if the field has been touched or has validation error attach 'has-danger' class, otherwise pass an empty class
        const className = `form-group ${touched && error ? 'has-danger' : ''}`; 

        return (
            <div className={className}>
                 <label>{field.label}</label>
                <input 
                    className="form-control"
                    {...field.input}
                />

                {/* if the user has touched it show the error message if not show nothing/ empty string  */}
                <div className="text-help">
                    {touched ? error : '' } 
                </div>
            </div>
        );
    }

    onSubmit(values) {       
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-danger " to="/">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate(values) {
    const error = {};

    // validate the inputs from values
    if(!values.title) {
        error.title = "Enter a title";
    }

    if(!values.categories) {
        error.categories = "Enter a category";
    }

    if(!values.content) {
        error.content = "Enter some content";
    }

    //if errors is empty the form is fine to submit
    return error;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);