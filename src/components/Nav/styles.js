import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  },
  navBar: {
    background: '#00838f'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  menuItem: {
    margin: theme.spacing(0, 3),
    color: '#ffff'
  },
  menuItemsContainer: {
    justifyContent: 'start',
    flex: 'auto',
    display: 'flex'
  }
}));
