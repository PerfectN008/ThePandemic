import React, { Component } from 'react';

import './RegionalData.styles.scss';
import MapRepresentation from '../MapRepresentation/MapRepresentation';
import {StateTable, DistrictTable} from '../Table/Table';

class RegionData extends Component{
    constructor(){
        super();
        this.state = {
            statewise_data: {},
            districtwise_data: {},
            selected_state: 'Karnataka',
            selected_district: 'Ballari'
        }
    }

    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => this.setState({statewise_data:data}))

        
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(data => this.setState({districtwise_data:data}))
    }

    // componentDidUpdate(){
    //         this.setState(({selected_state_data: this.state.statewise_data.statewise.filter( state => state.statecode === this.state.selected_state)}))
    // }

    onChangeValue = (event) => {
        const {name,value} =event.target;
          this.setState({ [name] : value });
    }

    selected_state_data = () => {
        const arr = this.state.statewise_data.statewise.filter( state => state.state === this.state.selected_state );
        return arr;
    }

    selected_state_districts = () => {
        const selectedState = this.state.selected_state;
        const districtwiseData = this.state.districtwise_data;
        const stateDistricts = districtwiseData[selectedState] ? districtwiseData[selectedState] : {
            "districtData": {
              "Unassigned": {
                "notes": "",
                "active": 0,
                "confirmed": 0,
                "deceased": 0,
                "recovered": 0,
                "delta": {
                  "confirmed": 0,
                  "deceased": 0,
                  "recovered": 0
                }
              }
            },
            "statecode": "UN"
          }
        return(stateDistricts)
    }

    selected_district_data = () => {
        const selectedStateDistricts = this.selected_state_districts().districtData
        const selectedDistrict = Object.entries(selectedStateDistricts).filter(([key]) => key === this.state.selected_district)
        const selectedDistrictData = selectedDistrict[0] ? selectedDistrict[0] : [ "Unassigned", {
            "notes": "",
            "active": 0,
            "confirmed": 0,
            "deceased": 0,
            "recovered": 0,
            "delta": {
              "confirmed": 0,
              "deceased": 0,
              "recovered": 0
            }
          } ]
        return selectedDistrictData;
    }

    render(){
        return(
            <div className='region_data'>
                <h1 className='heading'>Regional Data</h1>
                {
                this.state.statewise_data.statewise && this.state.districtwise_data ? 
                    <div className='data'>
                        <MapRepresentation className='map' statewiseData={this.state.statewise_data.statewise} selected_state={this.state.selected_state} />
                        <div className='row'>
                            <div className='statewise_data col1of2'> 
                                <select name='selected_state' onChange={this.onChangeValue}>
                                    <option value='Select' hidden>Select State</option>
                                    {this.state.statewise_data.statewise.slice(1).sort((a,b) => a.state>b.state ? 1 : -1).map( state => 
                                        <option key={state.statecode} value={state.state}>{state.state}</option>
                                        )
                                    }
                                </select>
                                <StateTable data={this.selected_state_data()} />
                            </div>

                            <div className='districtwise_data col1of2'>
                                <select name='selected_district' onChange={this.onChangeValue}>
                                    <option value='Select' hidden>Select District</option>
                                    {Object.entries(this.selected_state_districts().districtData).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                                </select>
                                <DistrictTable data={this.selected_district_data()} />
                            </div>
                        </div>
                    </div>
                    : <div>Loading...</div>
                }
            </div>
        )
    }
}

export default RegionData;
