import React, { Component } from 'react';

import './CountryData.styles.scss';
import LineChart from '../LineChart/LineChart';

class CountryData extends Component{
    constructor(){
        super()
        this.state={
          country_data: {},
          selected_period: 7,
          selected_data: 'dailyconfirmed'
        }
      }
    
      componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(users => this.setState({country_data:users}))
      }

      onChangeValue = (event) => {
        const {name,value} =event.target;
          this.setState({ [name] : value });
      }

    render(){
        
        return(
            <div className='country_data'>
                <h1 className='heading'>National Data</h1>
                <div className='data'>
                    {
                    this.state.country_data.statewise !== undefined ? 
                    <div className='row'>
                        <div className='col1of2'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table_row'>
                                        <th>Active Cases</th>
                                        <td>{this.state.country_data.statewise[0].active}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Total Confirmed Cases</th>
                                        <td>{this.state.country_data.statewise[0].confirmed}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Total Deaths</th>
                                        <td>{this.state.country_data.statewise[0].deaths}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Recovered</th>
                                        <td>{this.state.country_data.statewise[0].recovered}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Todays Confirmed</th>
                                        <td>{this.state.country_data.statewise[0].deltaconfirmed}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Todays Deaths</th>
                                        <td>{this.state.country_data.statewise[0].deltadeaths}</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <th>Todays Recovered</th>
                                        <td>{this.state.country_data.statewise[0].deltarecovered}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>*Last updated on {this.state.country_data.statewise[0].lastupdatedtime}</p>
                            <p>*Todays data refers to data from 00:00 to particular time and not to last 24 hours</p>
                        </div>
                        <div className='col1of2'>
                            <form onChange={this.onChangeValue}>
                                <input type='radio' value='7' name='selected_period'/> 7 Days
                                <input type='radio' value='30' name='selected_period' /> 30 Days
                                <br></br>
                                <input type='radio' value='dailyconfirmed' name='selected_data' /> Daily Confirmed
                                <input type='radio' value='dailydeceased' name='selected_data' /> Daily Deceased
                                <input type='radio' value='dailyrecovered' name='selected_data' /> Daily Recovered
                                <input type='radio' value='totalconfirmed' name='selected_data' /> Total Confirmed
                                <input type='radio' value='totaldeceased' name='selected_data' /> Total Deceased
                                <input type='radio' value='totalrecovered' name='selected_data' /> Total Recovered
                            </form>
                            <LineChart data={this.state.country_data.cases_time_series} time={this.state.selected_period} selected={this.state.selected_data}/>
                        </div>
                    </div>
                    : <div className='loading'>Loading...</div>
                    }
                </div>
            </div>
        )
    }
}

export default CountryData;