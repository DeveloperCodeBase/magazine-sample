import React from "react";
import {
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MagCard3({ title, text, writer }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      {/* <CardMedia
        className={classes.cover}
        image="assets/img/s1.svg"
        title={title}
        // width={50}
      /> */}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {text}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {writer}
          </Typography>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
    </Card>
  );
}
