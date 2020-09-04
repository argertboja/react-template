import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerTabs from 'components/DrawerTabs'

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  inPageDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
  },
  menuItem: {
      display: 'flex',
      flex: 1,
  }
}));

const InPageDrawer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
      <DrawerTabs />
      </div>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default InPageDrawer;
