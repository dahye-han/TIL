import React, { Fragment } from 'react';
import { compose } from 'recompose'
import { List, ListItem, ListItemText, Typography, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from '../../context';

const styles = {
    title: {
        textTransform: 'capitalize'
    }
}

const Catalog = ({
    classes,
    exercisesByMuscles, 
    category, 
    onSelect,
    onDelete,
    onSelectEdit,
    onEdit
}) => (
    exercisesByMuscles.map(
        ([group, exercises]) => 
        (!category || category === group) && (
            <Fragment key={group}>
                <Typography
                    className={classes.title}
                    variant='h6'
                    color='secondary'
                >
                    {group}
                </Typography>
                <List component='ui'>
                    {exercises.map(({ id, title }) => (
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
                    ))}
                </List>
            </Fragment>
            )
    )
)

export default compose(
    withContext,
    withStyles(styles)
)(Catalog);