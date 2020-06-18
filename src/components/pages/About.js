import React from 'react';
import Grid from '@material-ui/core/Grid';

function About() {
    return (
        <Grid container className='about'>
            <Grid item xs={12} md={6}>
                <h1>About BrunchFace</h1>
                BrunchFace is grounded in Peter Chung’s Graduate Fine Arts Thesis at PennDesign.
                His paintings are visual cues that marked his experience at brunch restaurants across the east coast.
            </Grid>
            <Grid item xs={12} md={6}>
                Slideshow
            </Grid>
            <Grid item xs={12}>
                <h1>Meet the Team</h1>
            </Grid>
            <Grid item>
                Grids
            </Grid>
        </Grid>
    )
}

export default About;