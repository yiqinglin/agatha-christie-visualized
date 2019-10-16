import React from 'react';
import { FilterValueContext } from '../filter-value-context';
import AvatarWrapper from './AvatarWrapper';

const Detective = ({ title, imageSrc, imageAlt, classes : c }: props) => {
  return (
    <FilterValueContext.Consumer>
      {value => (
        <AvatarWrapper
          title={title}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          selected={value.filters.selectedDetective === title}
          onClick={() => value.updateSelectedDetective(title)}
        />
      )}
    </FilterValueContext.Consumer>
  );
}

export default Detective;