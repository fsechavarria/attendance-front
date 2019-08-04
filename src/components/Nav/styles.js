import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  },
  navBar: {
    background:
      'linear-gradient(to right bottom, #e29fe2, #da96df, #d28edd, #ca85db, #c17dd9, #c97ad2, #d077ca, #d675c2, #e67bb3, #ee84a6, #f2909d, #f29d98)'
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
