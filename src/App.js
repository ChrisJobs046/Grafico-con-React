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
    country: '',
  }

  async componentDidMount(){

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData})
  }

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData( country );

    this.setState({ data: fetchedData, country: country })

    console.log(fetchedData);

    //console.log(country);
    // set the data
  }

  render(){

    const { data } = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart/>
      </div>
    )
  }
}

export default App;
