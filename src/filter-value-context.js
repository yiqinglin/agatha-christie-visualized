import { createContext } from 'react';

const defaultFilterValue = {
  publishDate: {
    min: 1928,
    max: 1968
  }
}

export const FilterValueContext = createContext(defaultFilterValue);

