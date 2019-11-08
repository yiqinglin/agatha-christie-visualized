import React, { createRef } from 'react';
import { ThemeProvider } from 'react-jss';
import { difference } from 'lodash';
import Main from './components/Main';
import { FilterValueContext } from './filter-value-context';
import { FilterRangeContext } from './filter-range-context';
import { data } from './data';
import { calcMinMax } from './utils/calcMinMax';

const range = calcMinMax(data, ['publishDate', 'pageCount', 'deathCount']);

const theme = {
  colorPrimary: '#724144',
  colorPrimaryDark: '#8C6A6A',
  colorBackground: '#1C1C1C',
  colorWhite: '#FFFFFF',
  colorGrey: '#494949',
  colorText: '#EFF1E4',
  colorHighlight: '#887856'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      viewportHeight: 0,
      showSideBar: false,
      publishDateRange: range.publishDate,
      pageCountRange: range.pageCount,
      deathCountRange: range.deathCount,
      selectedMurderMethods: [],
      selectedDetective: "",
      selectedCharacters: []
    }
  }

  handlePDRangeChange = (newRange) => {
    this.setState({ publishDateRange: newRange});
  }

  handlePageCountRangeChange = (newRange) => {
    this.setState({ pageCountRange: newRange });
  }

  handleDeathCountRangeChange = (newRange) => {
    this.setState({ deathCountRange: newRange });
  }

  updateSelectedCharacters = (character) => {
    const currList = [...this.state.selectedCharacters];
    const index = currList.indexOf(character);

    if (index > -1) {
      currList.splice(index, 1);
    } else {
      currList.push(character);
    }
    this.setState({ selectedCharacters: currList });
  }

  updateSelectedDetective = (detective) => {
    let newDetective = "";
    
    if (this.state.selectedDetective === detective) {
      newDetective = "";
    } else {
      newDetective = detective;
    }
    this.setState({ selectedDetective: newDetective })
  }

  updateMurderMethods = (newMethod, operation) => {
    console.log(newMethod, operation);
    const currList = [...this.state.selectedMurderMethods];
    const index = currList.indexOf(newMethod);

    switch (operation) {
      case 'REMOVE':
        currList.splice(index, 1);
        break;
      case 'ADD':
        if (index < 0) {
          currList.push(newMethod);
        }
        break;
      default:
        break;
    }

    this.setState({ selectedMurderMethods: currList });
  }

  filterData = () => {
    const [ PDMin, PDMax ] = this.state.publishDateRange;
    const [ PCMin, PCMax ] = this.state.pageCountRange;
    const [ DCMin, DCMax ] = this.state.deathCountRange;
    const { selectedDetective, selectedMurderMethods, selectedCharacters } = this.state;

    
    return data.filter((book) => {
      return book.publishDate >= PDMin && book.publishDate <= PDMax
        && book.pageCount >= PCMin && book.pageCount <= PCMax
        && book.deathCount >= DCMin && book.deathCount <= DCMax
        && difference(selectedCharacters, book.characters).length === 0
        && (selectedDetective === "" || book.detective === selectedDetective)
        && difference(selectedMurderMethods.map(method => method.method), book.murderMethods).length === 0
    });
  }

  render() {
    const {  viewportHeight, showSideBar, ...filterStates } = this.state;

    return (
      <FilterRangeContext.Provider value={range}>
        <FilterValueContext.Provider value={{
          filters: {...filterStates},
          handlePDRangeChange: this.handlePDRangeChange,
          handlePageCountRangeChange: this.handlePageCountRangeChange,
          handleDeathCountRangeChange: this.handleDeathCountRangeChange,
          updateSelectedDetective: this.updateSelectedDetective,
          updateSelectedCharacters: this.updateSelectedCharacters,
          updateMurderMethods: this.updateMurderMethods
        }}>
          <ThemeProvider theme={theme}>
            <Main filteredData={this.filterData()} />
          </ThemeProvider>
        </FilterValueContext.Provider>
      </FilterRangeContext.Provider>
    );
  }
}

export default App;
