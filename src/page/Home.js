import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
function Home() {
    const [name,setName] = useState('Sandeep');
  return (
    <div className="App">
      <h2></h2>
       
          <Grid container style={{backgroundColor:"black"}}>
            <AppBar>
                <Toolbar style={{backgroundColor:"black"}}>
                <Grid item xs={12} sm={12}  md={4} lg={4} xl={4}>
                  <a href="">CleverHacker</a>
            </Grid>
            <Grid item xs={12} sm={12}  md={4} lg={8} xl={8}>
                  <Grid container spacing={5}>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <a href="">Home</a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                      <a href="">Service</a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                      <a href="">About</a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                       <a href="">Contact</a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <a href="">News</a>
                      </Grid>
                      <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <a href="">Xyz</a>
                      </Grid>
                  </Grid>
            </Grid>
                </Toolbar>
               
             
            
            </AppBar>
            <Grid item md={8} lg={7} xl={7}>
                <h3 className="mainPara">We're a digital</h3>
                <h3 style={{fontSize:"4rem"}}>agency</h3>
              </Grid> 
            </Grid>
           
            
         
    </div>
  );
}

export default Home
