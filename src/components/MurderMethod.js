import React from "react";
import injectSheet from 'react-jss';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
import ToolTip from '@material-ui/core/ToolTip';
import { startCase } from 'lodash';

const MurderMethod = ({ method, displayOnly, handleDelete, handleSelect, icon, classes: c}: props) => {
  return (
    <ToolTip title={method} disableHoverListener={displayOnly}>
      <Chip
        className={c.container}
        label={displayOnly ? startCase(method) : ""}
        icon={<Icon>{icon}</Icon>}
        onDelete={displayOnly ? handleDelete : null}
        onClick={handleSelect}
      />
    </ToolTip>
  );
}

const styles = {
  container: {
    margin: '5px'
  }
};

export default injectSheet(styles)(MurderMethod);