import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  table: {
    width: '100%',
    marginTop: '15px'
  },
  grid: {
    outline: 0,
    background: '#fff'
  },
  header: {
    borderBottom: '2px solid black',
    paddingBottom: '10px'
  },
  row: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    '&:hover': {
      background: '#ededed'
    }
  }
}));
