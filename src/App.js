import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './Components';
import styles from'./App.Module.css';
import { fetchData } from './api'

import CovidImage from './Images/CovidImage.jpg';


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

    const { data, country } = this.state;

    return(
      <div className={styles.container}>
        <img className={styles.CovidImage} src={ CovidImage } alt="Covid-19!!!"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={ country }/>
      </div>
    )
  }
}

export default App;
