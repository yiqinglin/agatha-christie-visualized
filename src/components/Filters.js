import React from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import { characters, detectives, murderMethods } from '../data';
import { FilterValueContext } from '../filter-value-context';
import { FilterRangeContext } from '../filter-range-context';
import CustomSlider from './CustomSlider';
import CustomDivider from './CustomDivider';
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
              <div className={c.header}>
                <h3 className={c.headerTitle}>Filter</h3>
                <p className={c.headerDesc}>Use the filters below to find books fit your criteria</p>
                <CustomDivider />
              </div>
              <p className={c.sectionTitle}>Publish Year</p>
                <CustomSlider
                  min={range.publishDate[0]}
                  max={range.publishDate[1]}
                  value={value.filters.publishDateRange}
                  onChange={(event, newValue) => value.handlePDRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.publishDateRange}}`}
                />
              <p className={c.sectionTitle}>Page Count</p>
              <CustomSlider
                  min={range.pageCount[0]}
                  max={range.pageCount[1]}
                  value={value.filters.pageCountRange}
                  onChange={(event, newValue) => value.handlePageCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.pageCountRange}}`}
                />
              <p className={c.sectionTitle}>Death Count</p>
              <CustomSlider
                  min={range.deathCount[0]}
                  max={range.deathCount[1]}
                  value={value.filters.deathCountRange}
                  onChange={(event, newValue) => value.handleDeathCountRangeChange(newValue)}
                  valueLabelDisplay="on"
                  aria-labelledby="range-slider"
                  getAriaValueText={() => `${value.filters.deathCountRange}}`}
                />
              <p className={c.sectionTitle}>By Detectives</p>
              <div className="detectives">
                <Grid container justify="flex-start" alignItems="center">
                  {detectives.map((detective, i) => (
                    <Detective key={i} imageSrc={detective.avatar} imageAlt={detective.name} title={detective.name} />
                  ))}  
                </Grid>
              </div>
              <p className={c.sectionTitle}>By Characters</p>
              <div className="characters">
                <Grid container justify="flex-start" alignItems="center">
                  {characters.map((character, i) => (
                    <Character key={i} imageSrc={character.avatar} imageAlt={character.name} title={character.name} />
                  ))}                  
                </Grid>
              </div>
              <p className={c.sectionTitle}>By Murder Methods</p>
                <Grid container justify="flex-start" alignItems="center">
                    {value.filters.selectedMurderMethods.length > 0 && value.filters.selectedMurderMethods.map((method, i) => (
                      <MurderMethod
                        key={i}
                        displayOnly
                        method={method.method}
                        icon={method.icon}
                        handleDelete={() => value.updateMurderMethods(method, 'REMOVE')} />
                    ))}
                </Grid>
                <Grid container justify="flex-start" alignItems="center">
                  {murderMethods.map((method, i) => (
                    <MurderMethod
                      method={method.method}
                      icon={method.icon}
                      key={i}
                      handleSelect={() => value.updateMurderMethods(method, 'ADD')}
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

const styles = theme => ({
  container: {
    width: '100%',
    height: '100vh',
    textAlign: 'left'
  },
  headerTitle: {
    textTransform: 'capitalize',
    fontSize: '1em',
    fontWeight: '700'
  },
  headerDesc: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '0.8em'
  },
  sectionTitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '0.8em',
    marginTop: '20px'
  }
});

export default injectSheet(styles)(Filters);