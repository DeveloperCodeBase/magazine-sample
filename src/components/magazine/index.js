import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Container,
  SvgIcon,
  makeStyles,alpha,
  useTheme,MenuItem,Menu,InputBase 
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FirstSec from "./FirstSec";
import OwlC from "./OwlC";
import FooterMag from "./footerMag";
import MagCard3 from "./MagCard3";
import Pagination from "@material-ui/lab/Pagination";
import ColomnA from "./columnA";
import ThemeProvider from "../../Material/PrimaryColor";
import SearchIcon from '@material-ui/icons/Search';

const pages = [ 'ورود'];

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(0),
    // marginLeft: theme.spacing(0),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${0}px)`,
     
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for 22content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    // position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: "#112233",
    color: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    background: "#ffffff",
    overflow: "auto",
    // padding:"0px"
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
  },
  devid: {
    background: "#fff",
    color: "#fff",
  },
  content3: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: 1280,
    background: "#112233",
  },
  paging: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
  },
  search: {
    direction:"ltr",
    color:"#ffffff",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },},
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
}));
function Description(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </SvgIcon>
  );
}
function Work(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />
    </SvgIcon>
  );
}
function Magazine(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dataR3 = [
    {
      title: "ARCode",
      text: "Bitcoin’s market cap of $1 trillion makes it too important to ignore. As long as asset managers and companies continue to enter the market, bitcoin prices could continue to rise.",
      writer: "Masoud Bakhshi",
    },
    {
      title: "FaceDetection",
      text: "Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.",
      writer: "Masoud Bakhshi",
    },
    {
      title: "FaceDetection",
      text: "Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.",
      writer: "Masoud Bakhshi",
    },
    {
      title: "FaceDetection",
      text: "Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.",
      writer: "Masoud Bakhshi",
    },
    {
      title: "FaceDetection",
      text: "Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.",
      writer: "Masoud Bakhshi",
    },
  ];
  // useEffect(() => {
  //   // window.scrollTo({
  //   //   top: 0,
  //   //   behavior: "smooth",
  //   // });
  //   scroll({ y: 0, smooth: true });
  // }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
    <ThemeProvider>
        <div dir="rtl">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <img src="./devlogo.png" alt="bug" height={30} />
              <Typography variant="h6" noWrap>
                DevCodeMag
              </Typography>
             
              {pages.map((page) => (
                <MenuItem key={page}
                //  onClick={handleCloseNavMenu}
                 >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
          


          <div dir="ltr" className={classes.search}>
            <div dir="ltr" className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            </Toolbar>
          </AppBar>
       
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="lg" className={classes.container}>
              {/* <FirstSec /> */}

              <OwlC />
              {/* <GlitchClip onHover={true}></GlitchClip> addin for code box*/}
              <ColomnA />
              {/* <CardLine /> */}

              {dataR3.map((data) => (
                <div key={data.title}>
                  <MagCard3 {...data} />
                </div>
              ))}

              <div className={classes.paging} style={{ marginBottom: "10px" }}>
                <Pagination count={10} variant="outlined" color="primary" />
              </div>
              <FooterMag />
            </Container>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

Magazine.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Magazine;
