import React from "react";
import Fade from "react-reveal/Fade";
import { makeStyles, Grid } from "@material-ui/core";
import MagCard2 from "./MagCard2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function CardLine() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Fade>
              <MagCard2></MagCard2>
            </Fade>
          </Grid>

          <Grid item>
            <Fade>
              <MagCard2></MagCard2>
            </Fade>
          </Grid>

          <Grid item>
            <Fade>
              <MagCard2></MagCard2>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardLine;
