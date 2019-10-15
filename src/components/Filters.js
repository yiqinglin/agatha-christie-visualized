import React from 'react';
// import cx from 'classnames';
import injectSheet from 'react-jss';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { FilterValueContext } from '../filter-value-context';
import { FilterRangeContext } from '../filter-range-context';
import Character from './Character';

function Filters({classes: c}: props) {
  return (
    <FilterRangeContext.Consumer>
      {range => (
        <FilterValueContext.Consumer>
          {value => (
            <div className={c.container}>
              <h3>Publish Year</h3>
                <Slider
                  min={range.publishDate[0]}
                  max={range.publishDate[1]}
                  value={value.filters.publishDateRange}
                  onChange={(event, newValue) => value.handlePDRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.publishDateRange}}`}
                />
              <h3>Page Count</h3>
              <Slider
                  min={range.pageCount[0]}
                  max={range.pageCount[1]}
                  value={value.filters.pageCountRange}
                  onChange={(event, newValue) => value.handlePageCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.pageCountRange}}`}
                />
              <h3>Death Count</h3>
              <Slider
                  min={range.deathCount[0]}
                  max={range.deathCount[1]}
                  value={value.filters.deathCountRange}
                  onChange={(event, newValue) => value.handleDeathCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.deathCountRange}}`}
                />
              
              <h3>Filter By</h3>
              <h4>Characters</h4>
              <div className="characters">
                <Grid container justify="center" alignItems="center">
                  <Character imageSrc="https://api.adorable.io/avatars/100/poirot@adorable.io.png" imageAlt="poirot" title="Hercule Poirot" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/missmarple@adorable.io.png" imageAlt="missmarple" title="Miss Marple" />
                </Grid>
                <Divider/>
                <Grid container justify="center" alignItems="center">
                  <Character imageSrc="https://api.adorable.io/avatars/100/chastings@adorable.io.png" imageAlt="chastings" title="Captain Hastings" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/japp@adorable.io.png" imageAlt="japp" title="Inspector Japp" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/ariadne@adorable.io.png" imageAlt="ariadne" title="Ariadne Oliver" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/battle@adorable.io.png" imageAlt="battle" title="Superintendent Battle" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/race@adorable.io.png" imageAlt="race" title="Colonel Race" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/bantrys@adorable.io.png" imageAlt="bantrys" title="Colonel/Dolly Bantrys" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/sirhenryclithering@adorable.io.png" imageAlt="sirhenryclithering" title="Sir Henry Clithering" />
                  <Character imageSrc="https://api.adorable.io/avatars/100/missbundle@adorable.io.png" imageAlt="missbundle" title="Lady Bundle Brent" />
                </Grid>
              </div>
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