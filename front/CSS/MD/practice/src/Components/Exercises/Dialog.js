import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import Form from './Form';

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = exercise => {
        this.handleToggle();

        this.props.onCreate(exercise);
    }

    render() {
        const { open } = this.state,
              { muscles, onCreate } = this.props;

        return <Fragment>
            <Button variant="fab" onClick={this.handleToggle} mini>
                <Icon>add_circle</Icon>
            </Button>

            <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                Create a New Exercise
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please fill out the form below.
            </DialogContentText>
            <Form 
                muscles={muscles}
                onSubmit={this.handleFormSubmit}
            />
            </DialogContent>
        </Dialog>
        </Fragment>
    }
}