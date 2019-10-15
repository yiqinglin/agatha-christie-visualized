import React, { createRef } from 'react';
import SideBar from './components/SideBar';
import BookStack from './components/BookStack';
import Filters from './components/Filters';
import data from './data';
import injectSheet from 'react-jss';
import { FilterValueContext } from './filter-value-context';
import { FilterRangeContext } from './filter-range-context';
import { calcMinMax } from './utils/calcMinMax';

const range = calcMinMax(data, ['publishDate', 'pageCount', 'deathCount']);

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

  handleScroll = () => {
    const bookStacksScrollPos = this.ref.current.getBoundingClientRect().top;
    const viewportCenter = this.state.viewportHeight / 2;

    if (bookStacksScrollPos <= viewportCenter) {
      this.setState({ showSideBar: true })
    } else {
      this.setState({ showSideBar: false })      
    }
  }

  updateViewportHeight = () => {
    this.setState({ viewportHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)});
  }

  componentDidMount(){
    this.updateViewportHeight();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateViewportHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateViewportHeight);
  }

  filterData = (data) => {
    const [ PDMin, PDMax ] = this.state.publishDateRange;
    const [ PCMin, PCMax ] = this.state.pageCountRange;
    const [ DCMin, DCMax ] = this.state.deathCountRange;
    return data.filter((book) => {
      return book.publishDate >= PDMin && book.publishDate <= PDMax
        && book.pageCount >= PCMin && book.pageCount <= PCMax
        && book.deathCount >= DCMin && book.deathCount <= DCMax;
    });
  }

  render() {
    const { classes: c } = this.props;

    return (
      <FilterRangeContext.Provider value={range}>
        <FilterValueContext.Provider value={{
          filters: {
            publishDateRange: this.state.publishDateRange,
            pageCountRange: this.state.pageCountRange,
            deathCountRange: this.state.deathCountRange,
            selectedCharacters: this.state.selectedCharacters
          },
          handlePDRangeChange: this.handlePDRangeChange,
          handlePageCountRangeChange: this.handlePageCountRangeChange,
          handleDeathCountRangeChange: this.handleDeathCountRangeChange,
          updateSelectedCharacters: this.updateSelectedCharacters
        }}>
          <div className={c.container}>
            <header className={c.header}>
              <h3 className={c.projectTitle}>Agatha Christie Visualized</h3>
              <p className={c.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </header>
            <div className={c.appBody}>
              <SideBar show={this.state.showSideBar}/>
              <SideBar right show={this.state.showSideBar}>
                <Filters/>
              </SideBar>
              <div className={c.stackContainer} ref={this.ref}>
                <BookStack data={this.filterData(data)} />
              </div>
            </div>
            <footer className={c.footer}>Just another line of text.</footer>
          </div>
        </FilterValueContext.Provider>
      </FilterRangeContext.Provider>
    );

  }
}

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white'
  },
  header: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  projectTitle: {
    fontSize: 'calc(10px + 2vmin)'
  },
  projectDesc: {
    maxWidth: '720px'
  },
  appBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minWidth: '1024px',
    paddingTop: '200px',
    paddingBottom: '200px'
  },
  stackContainer: {
    width: '100%'
  },
  footer: {
    paddingTop: '20px',
    paddingBottom: '20px'

  }
};

export default injectSheet(styles)(App);
