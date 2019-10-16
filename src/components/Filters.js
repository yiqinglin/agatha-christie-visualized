import React from 'react';
import injectSheet from 'react-jss';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { difference } from 'lodash';
import { characters, detectives, murderMethods } from '../data';
import { FilterValueContext } from '../filter-value-context';
import { FilterRangeContext } from '../filter-range-context';
import Character from './Character';
import Detective from './Detective';
import MurderMethod from "./MurderMethod";

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
              <div className="detectives">
                <Grid container justify="center" alignItems="center">
                  {detectives.map((detective, i) => (
                    <Detective key={i} imageSrc={detective.avatar} imageAlt={detective.name} title={detective.name} />
                  ))}  
                </Grid>
                <Divider/>
              </div>
              <div className="characters">
                <Grid container justify="center" alignItems="center">
                  {characters.map((character, i) => (
                    <Character key={i} imageSrc={character.avatar} imageAlt={character.name} title={character.name} />
                  ))}                  
                </Grid>
              </div>
              <h4>Murder Methods</h4>
                <Grid container justify="center" alignItems="center">
                    {value.filters.selectedMurderMethods.length > 0 && value.filters.selectedMurderMethods.map((method, i) => (
                      <MurderMethod
                        key={i}
                        displayOnly
                        method={method}
                        handleDelete={() => value.updateMurderMethods(method.method, 'REMOVE')} />
                    ))}
                </Grid>
                <Grid container justify="center" alignItems="center">
                  {difference(murderMethods, value.filters.selectedMurderMethods).map((method, i) => (
                    <MurderMethod
                      method={method.method}
                      icon={method.icon}
                      key={i}
                      handleSelect={() => value.updateMurderMethods(method.method, 'ADD')}
                    />
                  ))}
                </Grid>
            </div>
          )}
        </FilterValueContext.Consumer>
      )} 
    </FilterRangeContext.Consumer>
  );
}

const styles = {
  container: {
    width: '200px',
    height: '100vh'
  }
};

export default injectSheet(styles)(Filters);