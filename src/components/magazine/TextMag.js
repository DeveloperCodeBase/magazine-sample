import React from "react";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
} from "@material-ui/core";
import OwlCard from "./Card";
import ThemeProvider from "../Material/PrimaryColor";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#112233",
    padding: theme.spacing(1),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  cardd: {
    margin: theme.spacing(3),
  },
}));

export default function TextMag() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Developing Code Description
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />

          <Divider />
          <OwlCard className={classes.cardd} />
          <Divider />
          <OwlCard className={classes.cardd} />
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Software development is the process of conceiving, specifying,
            designing, programming, documenting, testing, and bug fixing
            involved in creating and maintaining applications, frameworks, or
            other software components. Software development is a process of
            writing and maintaining the source code, but in a broader sense, it
            includes all that is involved between the conception of the desired
            software through to the final manifestation of the software,
            sometimes in a planned and structured process.[1] Therefore,
            software development may include research, new development,
            prototyping, modification, reuse, re-engineering, maintenance, or
            any other activities that result in software products. The software
            can be developed for a variety of purposes, the three most common
            being to meet specific needs of a specific client/business (the case
            with custom software), to meet a perceived need of some set of
            potential users (the case with commercial and open source software),
            or for personal use (e.g. a scientist may write software to automate
            a mundane task). Embedded software development, that is, the
            development of embedded software, such as used for controlling
            consumer products, requires the development process to be integrated
            with the development of the controlled physical product. System
            software underlies applications and the programming process itself,
            and is often developed separately.
          </Typography>
          <Typography paragraph>
            The need for better quality control of the software development
            process has given rise to the discipline of software engineering,
            which aims to apply the systematic approach exemplified in the
            engineering paradigm to the process of software development. There
            are many approaches to software project management, known as
            software development life cycle models, methodologies, processes, or
            models. The waterfall model is a traditional version, contrasted
            with the more recent innovation of agile software development.
          </Typography>
        </main>
      </div>
    </ThemeProvider>
  );
}
