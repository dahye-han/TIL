import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Grid, Paper, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Form from './Form';

const styles = theme => ({
    Paper : { 
        padding: 20, 
        marginTop: 10, 
        height: 500, 
        overflowY: 'auto'
    }
})

export default withStyles(styles)(
    ({ 
        classes,
        muscles,
        exercises, 
        category, 
        editMode,
        onSelect,
        exercise, 
        exercise: {id, title = 'Welcome!', description = 'Please select in exercise from the list on the left'} ,
        onDelete,
        onSelectEdit,
        onEdit
    }) =>
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.Paper}>
                {exercises.map(([group, exercises]) => (
                    (!category || category === group)
                    ? <Fragment key={group}>
                            <Typography
                                variant='h6'
                                color='secondary'
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component='ui'>
                                {exercises.map(({ id, title }) =>
                                    <ListItem 
                                        key = {id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                        <ListItemSecondaryAction>
                                            <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color='primary' onClick={() => onDelete(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>     
                    : null
                ))}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.Paper}>
                    <Typography
                        variant='h2'
                        gutterBottom
                        color='secondary'
                    >
                        {title}
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
                            {description}
                        </Typography>
                    }
                </Paper>
            </Grid>
        </Grid>
)
    