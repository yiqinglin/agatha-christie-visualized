import React from 'react';
import injectSheet from 'react-jss';
import Divider from '@material-ui/core/divider';

function StyledDivider({ classes }) {
  return <Divider classes={{ root: classes.root }}/>;
}

const styles = theme => ({
  root: {
    backgroundColor: `${theme.colorPrimaryDark} !important`,
    margin: '5px auto !important'
  }
});

export default injectSheet(styles)(StyledDivider);
