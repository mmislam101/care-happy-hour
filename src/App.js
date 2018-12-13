import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0
  },
  grid: {
    padding: 0
  },
  paper: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: theme.palette.text.primary,
    backgroundColor: '#33ab9f'
  }
});

let countDownDate = new Date('Dec 13, 2018 15:00:00').getTime();
var audio = new Audio('Fanfare-sound.mp3');
console.log(audio);
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    audio.play();
    document.getElementById("demo").innerHTML = "The party has started! Please proceed to the kitchen area!";
  }
}, 1000);

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1 id='demo'>Party timer</h1></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);