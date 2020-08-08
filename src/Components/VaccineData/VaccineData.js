import React, { Component } from 'react';

import bgVideo from '../../Assets/bgvideo.webm';

import './VaccineData.styles.scss';

class VaccineData extends Component {
    constructor(){
        super()
        this.state = {
            vaccine_data : {}
        }
    }

    componentDidMount(){
        fetch('https://disease.sh/v3/covid-19/vaccine')
        .then(response => response.json())
        .then(data => this.setState({vaccine_data: data}))
    }

    render(){
        return(
            <div className='vaccine_data'>
                <div className='bg-video'>
                    <video className='bg-video-content' autoPlay muted loop>
                        <source src={bgVideo} type='video/webm' />
                        Your browser is not supported
                    </video>
                </div>
                <h1 className='heading'>Vaccine</h1>
                {
                    this.state.vaccine_data.phases  && this.state.vaccine_data.totalCandidates ? 
                    <div className='total_data'>
                        <h5>Number of researches: {this.state.vaccine_data.totalCandidates}</h5>
                    </div>
                    : <div>Loading...</div>
                }
                {
                    this.state.vaccine_data.data ? 
                    this.state.vaccine_data.data.filter((item, idx) => idx < 2).map( item => 
                        <div key={item.candidate} className='vaccine'>
                            <h2>{item.institutions[0]}</h2>
                            <h3>{item.candidate}</h3>
                            <h3>Sponsored by { item.sponsors.length > 1 ? item.sponsors[0]+' & '+item.sponsors[1] : item.sponsors[0]}</h3>
                            <h3>{item.trialPhase}</h3>
                            <p>{item.details}</p>
                        </div>
                        )
                    : <div>Loading...</div>
                }
            </div>
        )
    }
}

export default VaccineData;