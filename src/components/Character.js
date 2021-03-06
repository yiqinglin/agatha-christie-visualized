import React from 'react';
import { FilterValueContext } from '../filter-value-context';
import AvatarWrapper from './AvatarWrapper';

const Character = ({ title, imageSrc, imageAlt, classes : c }: props) => {
  return (
    <FilterValueContext.Consumer>
      {value => (
        <AvatarWrapper
          title={title}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          selected={value.filters.selectedCharacters.includes(title)}
          onClick={() => value.updateSelectedCharacters(title)}
        />
      )}
    </FilterValueContext.Consumer>
  );
}

export default Character;