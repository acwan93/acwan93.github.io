import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './App.css';

import grey from '@material-ui/core/colors/grey';

import Typography from '@material-ui/core/Typography';

const styles = {
    heroTitle: {
        color: grey[500],
    },
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div class='hero'>
                    <div class='hero-inner'>
                        <Typography className={classes.heroTitle} align='center' variant='h1'>
                            Albert Wan
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);
