import React from 'react';
import cx from 'classnames';
import injectSheet from 'react-jss';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/ToolTip';
import { FilterValueContext } from '../filter-value-context';

const Character = ({ title, imageSrc, imageAlt, classes : c }: props) => {
  return (
    <FilterValueContext.Consumer>
      {value => (
        <Tooltip title={title} className={c.character}>
          <Avatar
            src={imageSrc}
            alt={imageAlt}
            className={cx(c.avatar, value.filters.selectedCharacters.includes(title) && c.selected)}
            onClick={() => value.updateSelectedCharacters(title)}
          />
        </Tooltip>
      )}
    </FilterValueContext.Consumer>
  );
}

const styles = {
  character: {
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

export default injectSheet(styles)(Character);