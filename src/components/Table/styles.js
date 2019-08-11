import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  table: {
    width: '100%',
    marginTop: '15px'
  },
  grid: {
    background: '#fff'
  },
  header: {
    borderBottom: '2px solid black',
    paddingBottom: '10px'
  },
  row: {
    '&:hover': {
      background: '#ededed'
    }
  }
}));
