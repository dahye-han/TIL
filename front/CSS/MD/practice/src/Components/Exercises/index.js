import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Grid, Paper, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';

const styles = {
    Paper : { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

export default ({ 
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
    }) => {
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => (
                    (!category || category === group)
                    ? <Fragment key={group}>
                            <Typography
                                variant="h6"
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ui">
                                {exercises.map(({ id, title }) =>
                                    <ListItem 
                                        key = {id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => onSelectEdit(id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onDelete(id)}>
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
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {editMode
                    ? <Form
                        exercise={exercise}
                        muscles={muscles}
                        onSubmit={onEdit}
                      />
                    : <Fragment>
                        <Typography
                        variant="h2"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            style={{marginTop: 20}}
                        >
                            {description}
                        </Typography>
                    </Fragment>}
                    
                </Paper>
            </Grid>
        </Grid>
    ) 
}
    