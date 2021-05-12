import React from 'react';
import { Typography } from '@material-ui/core';
import { Form } from './';
import { withContext } from '../../context';

const Preview = ({
    muscles,
    editMode,
    exercise, 
    exercise: {id, title, description},
    onEdit
}) => (
    <>
        <Typography
            variant='h2'
            gutterBottom
            color='secondary'
        >
            {title || 'Welcome!'}
        </Typography>
        {editMode
        ? <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
            />
        : 
            <Typography
                variant='subtitle2'
            >
                {description || 'Please select in exercise from the list on the left'}
            </Typography>
        }
    </>
)

export default withContext(Preview);