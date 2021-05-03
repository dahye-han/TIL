import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    FormControl: {
        width: 300
    }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitState();

    getInitState() {
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

   componentDidUpdate(prevProps) {
        if(this.props.exercise && this.props.exercise.id !== prevProps.exercise.id) {
            this.setState({
                ...this.props.exercise
            })
        }
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        // TODO: validate

        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        });

        this.setState(this.getInitState());
    }

    render() {
        const { title, description, muscles} = this.state,
              { classes, muscles: categories } = this.props;

        return <form>
        <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
        />
        <br/>
        <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select
                value={muscles}
                onChange={this.handleChange('muscles')}
            >
                {categories.map(category =>
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                    )}
            </Select>
        </FormControl>
        <br/>
        <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
        />
        <br />
        <Button 
            color="primary"
            variant="raised"
            onClick={this.handleSubmit}
        >
            {this.props.exercise ? 'Edit' : 'Create'}
        </Button>
    </form>
    }
})