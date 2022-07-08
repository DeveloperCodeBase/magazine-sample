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
    maxWidth: 300,
    minWidth: 200,
    margin: 2,
    marginTop: 10,
    background:"#e1e1e1",
    // color:"#ffffff"
    
  },
});

export default function OwlCard({ title, explain, pic }) {
  const classes = useStyles();

  return (
    <Card dir="rtl" className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Masoud"
          //height="140"
          height="160px"
          // fullwidth
          width="160px"
          image={pic}
          title="Masoud"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {explain}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          اشتراک گذاری
        </Button>
        <Button size="small" color="primary">
          اطلاعات بیشتر       </Button>
      </CardActions>
    </Card>
  );
}
