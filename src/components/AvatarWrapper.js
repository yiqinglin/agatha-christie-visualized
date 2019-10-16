import React from 'react';
import cx from 'classnames';
import injectSheet from 'react-jss';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/ToolTip';

const AvatarWrapper = ({ title, imageSrc, imageAlt, onClick, selected, classes : c }: props) => {
  return (
    <Tooltip title={title} className={c.container}>
      <Avatar
        src={imageSrc}
        alt={imageAlt}
        className={cx(c.avatar, selected && c.selected)}
        onClick={onClick}
      />
    </Tooltip>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
    margin: '5px',
    transition: 'filter .2s ease-in-out'
  },
  avatar: {
    filter: 'grayscale(20)'
  },
  selected: {
    filter: 'none'
  }
};

export default injectSheet(styles)(AvatarWrapper);