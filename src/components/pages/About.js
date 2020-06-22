import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slideshow from './Slideshow';
import peter from '../../images/team/peter.jpg';
import xinyi from '../../images/team/xinyi.jpg';
import jon from '../../images/team/jon.png';
import jolene from '../../images/team/jolene.png';
import priscilla from '../../images/team/priscilla.jpg';
import sharon from '../../images/team/sharon.jpg';
import dianne from '../../images/team/dianne.jpg';
import vicky from '../../images/team/vicky.jpeg';
import tiffanie from '../../images/team/tiffanie.jpg';
import mauricio from '../../images/team/mauricio.jpg';
import john from '../../images/team/john.png';

function About() {
    return (
        <Grid container className='about'>

            <Grid item xs={12} sm={6}>
                <h1>About BrunchFace</h1>
                <p>BrunchFace is grounded in Peter Chung’s Graduate Fine Arts Thesis at PennDesign.</p>
                <p>His paintings are visual cues that marked his experience at brunch restaurants across the east coast.</p>
                <p style={{color:'red'}}>A BLURB ABOUT THE GAME</p>
            </Grid>

            <Grid item xs={12} sm={1}></Grid>

            <Grid item xs={12} sm={5}>
                <Slideshow />
            </Grid>

            <Grid item xs={12}>
                <h1>Meet the Team</h1>
            </Grid>
            
            <Grid item container spacing={3} style={{textAlign:'center'}}>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={peter} alt={peter} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={xinyi} alt={xinyi} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={jon} alt={jon} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={jolene} alt={jolene} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={priscilla} alt={priscilla} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={sharon} alt={sharon} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={dianne} alt={dianne} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={vicky} alt={vicky} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={tiffanie} alt={tiffanie} style={{width:'20vw'}} />
                            </div>
                            <div className="flip-box-back">
                                <h2>Name</h2>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* <Grid item container spacing={3} style={{textAlign:'center'}}>
                <Grid item xs={3}><img style={{width:'20vw'}} src={peter} alt={peter} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={xinyi} alt={xinyi} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={jon} alt={jon} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={jolene} alt={jolene} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={priscilla} alt={priscilla} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={sharon} alt={sharon} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={dianne} alt={dianne} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={vicky} alt={vicky} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={tiffanie} alt={tiffanie} /></Grid>
            </Grid> */}

            <Grid item xs={12}>
                <h1>Advisers</h1>
            </Grid>
            
            <Grid item container spacing={3} style={{textAlign:'center'}}>
                <Grid item xs={3}><img style={{width:'20vw'}} src={mauricio} alt={mauricio} /></Grid>
                <Grid item xs={3}><img style={{width:'20vw'}} src={john} alt={john} /></Grid>
            </Grid>

            {/* <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src={priscilla} alt={priscilla} style={{width:'20vw'}} />
                    </div>
                    <div className="flip-box-back">
                        <h2>Paris</h2>
                        <p>What an amazing city</p>
                    </div>
                </div>
            </div> */}

        </Grid>
    )
}

export default About;