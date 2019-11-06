import React from "react";
import injectSheet from 'react-jss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ToolTip from '@material-ui/core/ToolTip';
import { startCase } from 'lodash';

const MurderMethod = ({ method, displayOnly, handleDelete, handleSelect, icon, classes: c}: props) => {
  const avatarSrc = `/assets/icons/${icon}.jpg`;
  return (
    <ToolTip title={method} disableHoverListener={displayOnly}>
      <Chip
        className={c.container}
        label={displayOnly ? startCase(method) : ""}
        avatar={<Avatar src={avatarSrc}/>}
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