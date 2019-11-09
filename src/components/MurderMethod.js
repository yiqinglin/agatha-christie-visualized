import React from "react";
import injectSheet from 'react-jss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ToolTip from '@material-ui/core/ToolTip';
import { startCase } from 'lodash';

const MurderMethod = ({ method, displayOnly, handleDelete, handleSelect, icon, classes: c}: props) => {
  return (
    <ToolTip title={method} disableHoverListener={displayOnly}>
      <Chip
        className={c.container}
        label={startCase(method)}
        avatar={<Avatar>{method[0]}</Avatar>}
        onDelete={displayOnly ? handleDelete : null}
        onClick={handleSelect}
      />
    </ToolTip>
  );
}

const styles = {
  container: {
    margin: '5px',
    '& .MuiChip-label': {
      display: props => props.displayOnly ? 'flex' : 'none'
    }
  }
};

export default injectSheet(styles)(MurderMethod);