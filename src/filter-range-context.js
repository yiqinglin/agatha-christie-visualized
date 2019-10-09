import { createContext } from 'react';

const defaultFilterRange = {
  publishDate: {
    min: 1928,
    max: 1968
  }
}

export const FilterRangeContext = createContext(defaultFilterRange);

