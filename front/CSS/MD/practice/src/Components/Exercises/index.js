import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Grid, Paper, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Form from './Form';

const styles = theme => ({
    paper : { 
        padding: theme.spacing(3), 
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginTop: 5, 
            height: 'calc(100% - 10px)',
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%',
        }
    },
    '@global': {
        'html, body, #root' : {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')] : {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')] : {
            height: 'calc(100% - 56px - 48px)'
        },
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
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
        <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
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
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
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
    