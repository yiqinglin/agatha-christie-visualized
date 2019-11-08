import React from 'react';
import { withTheme } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/divider';

function StyledDivider({ theme }: props) {
  const styles = {
    root: {
      backgroundColor: theme.colorPrimaryDark,
      margin: '5px auto'
    }
  };  
  const classes = makeStyles(styles);

  return <Divider className={classes.root}/>;
}

export default withTheme(({ theme }) => <StyledDivider theme={theme} />);