import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 200,
    margin: 2,
    marginTop: 10,
    background:"#e1e1e1"
  },
});

export default function MagCard2({ title, text, pic }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Masoud"
          height="165"
          image={pic}
          title="Masoud"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          اشتراک گذاری
        </Button>
        <Button size="small" color="primary">
         اطلاعات بیشتر
        </Button>
      </CardActions>
    </Card>
  );
}
