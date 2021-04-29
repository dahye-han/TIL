import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Typography, Grid, Paper } from '@material-ui/core';

const styles = {
    Paper : { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

export default ({ exercises, category, onSelect, exercise: {id, title = 'Welcome!', description = 'Please select in exercise from the list on the left'} }) => {
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
                </Paper>
            </Grid>
        </Grid>
    ) 
}
    