import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/slider';

const styles = {
  root: {
    color: '#EFF1E4',
    marginBottom: '12px'
  },
  thumb: {
    width: '15px',
    height: '15px'
  },
  valueLabel: {
    top: 22,
    '& *': {
      background: 'transparent'
    },
  }
};

export default withStyles(styles)(Slider);