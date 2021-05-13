import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
class Form extends Component {
    state = this.getInitState();

    getInitState() {
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = ({ target: { value, name }}) => {
            this.setState({
                [name]: value
            })
        }
    
    handleSubmit = () => {
        // TODO: validate

        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state
        });
    }

    render() {
        const { title, description, muscles} = this.state,
              { muscles: categories } = this.props;

        return <form>
        <TextField
            label='Title'
            value={title}
            name='title'
            onChange={this.handleChange}
            margin='normal'
            fullWidth
        />
        <FormControl fullWidth margin='normal'>
            <InputLabel htmlFor='muscles'>Muscles</InputLabel>
            <Select
                value={muscles}
                name='muscles'
                onChange={this.handleChange}
            >
                {categories.map(category =>
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                    )}
            </Select>
        </FormControl>
        <TextField
            multiline
            rows='4'
            label='Description'
            value={description}
            name='description'
            onChange={this.handleChange}
            margin='normal'
            fullWidth
        />
        <Button 
            color='primary'
            variant='raised'
            onClick={this.handleSubmit}
            disabled={!title || !muscles}
        >
            {this.props.exercise ? 'Edit' : 'Create'}
        </Button>
    </form>
    }
}

export default Form;