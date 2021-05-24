import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from'./App.Module.css';
import { fetchData } from './api'


class App extends React.Component {
  
  state = {

    data: {},
  }

  async componentDidMount(){

    const fetcheData = await fetchData();

    this.setState({ data: fetcheData})
  }

  render(){
    return(
      <div className={styles.container}>
        <Cards data={this.}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;
