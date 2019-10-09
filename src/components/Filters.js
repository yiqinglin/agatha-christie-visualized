import React from 'react';
// import cx from 'classnames';
import injectSheet from 'react-jss';
import Slider from '@material-ui/core/Slider';
import { FilterValueContext } from '../filter-value-context';
import { FilterRangeContext } from '../filter-range-context';

function Filters({classes: c}: props) {
  return (
    <FilterRangeContext.Consumer>
      {range => (
        <FilterValueContext.Consumer>
          {value => (
            <div className={c.container}>
              <h3>Publish Year Range</h3>
                <Slider
                  min={range.publishDate.min}
                  max={range.publishDate.max}
                  value={value.filters.publishDateRange}
                  onChange={(event, newValue) => value.handlePDRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.publishDateRange}}`}
                />
              <h3>Death Count</h3>
              <h3>Filter By</h3>
              <h4>Characters</h4>
              <h4>Murder Methods</h4>
            </div>
          )}
        </FilterValueContext.Consumer>
      )} 
    </FilterRangeContext.Consumer>
  );
}

const styles = {
  container: {
    width: '160px'
  }
};

export default injectSheet(styles)(Filters);