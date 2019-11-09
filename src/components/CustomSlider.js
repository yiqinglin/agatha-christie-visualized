import React from 'react';
import { withTheme } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/slider';

const StyledSlider = ({ theme, ...rest}: props) => {
  const useStyles = makeStyles({
    root: {
      color: theme.colorText,
      marginBottom: '12px',
      '& .MuiSlider-thumb': {
        width: '15px',
        height: '15px'
      },
      '& .MuiSlider-valueLabel': {
        top: 22,
        '& *': {
          background: 'transparent'
        }
      }
    },
  });
  const classes = useStyles();

  return (
    <Slider {...rest} className={classes.root}/>
  )
}

export default withTheme(({ theme, ...rest }) => <StyledSlider theme={theme} {...rest} />);