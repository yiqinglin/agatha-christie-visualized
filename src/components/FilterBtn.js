import React from 'react';
import tinycolor from 'tinycolor2';
import { withTheme } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilterIcon from '@material-ui/icons/FilterList';

function FilterBtn({ onClick, theme }: props) {
  const useStyles = makeStyles({
    root :{
      backgroundColor: theme.colorPrimary,
      color: theme.colorText,
      '&:hover': {
        backgroundColor: tinycolor(theme.colorPrimary).darken()
      }
    }
  });
  const classes = useStyles();

  return (
    <IconButton aria-label='filter' className={classes.root} onClick={onClick}>
      <FilterIcon fontSize='small'/>
    </IconButton>
  );
}

export default withTheme(({ theme, onClick }) => <FilterBtn theme={theme} onClick={onClick} />);