import React from 'react';
import ListItemLink from './ListItemLink';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TranslateIcon from '@material-ui/icons/Translate';
import IconLabelLink from './IconLabelLink';

/*
  Navigation Menu holds
    - navbar (for settings)
    - div to move all content down (so not obscurbed by navbar)
    - sidebar for route navigation
*/


const drawerWidth = 240;

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  }
}));

// Cannot add styling directly onto TranslateIcon in IconComponent which requires string input
const whiteTranslateIcon = () => { return (<TranslateIcon style={{color:"inherit"}} />) }

function LanguageSelector(props) {
  const classes = useStyles2();
  const [age, setAge] = React.useState('en');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
    props.onSelectLanguage(event.target.value)
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        id="demo-simple-select"
        IconComponent={whiteTranslateIcon}
        value={age}
        onChange={handleChange}
        style={{color:"inherit", fontSize: '18px' }}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'zh'}>简体中文</MenuItem>
        <MenuItem value={'jp'}>日本語</MenuItem>
      </Select>
    </FormControl>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo: {
    height: '50px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  divider: {
    margin: theme.spacing(0, 0.5),
    background: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  grow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  toolbar: theme.mixins.toolbar
}));
    

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const { logo, routeData } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open)
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{
          opacity: 0.7,
          backgroundColor: '#222831',
          backgroundBlendMode: "normal,luminosity",
          backdropFilter: 'blur(5px)',
          boxShadow: '3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className={classes.logo} alt="logo" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconLabelLink 
              ariaLabel="sign-in"
              to="/signin"
              primary="Sign In"
              icon={<ExitToAppIcon />} 
            />
            <IconLabelLink 
              ariaLabel="register"
              to="/register"
              primary="Register"
              icon={<AssignmentIcon />} 
            />
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <LanguageSelector onSelectLanguage={props.onSelectLanguage} />
          </div>
        </Toolbar>
      </AppBar>
      
      <div className={classes.toolbar} />
      
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer(false)}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {routeData.map((obj, idx) => {
              return <ListItemLink key={obj.text + idx} to={obj.link} primary={obj.text} icon={obj.iconFunc()} />
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
