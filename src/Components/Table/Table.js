import React from 'react';

import './Table.styles.scss';

const StateTable = ({data}) => {
    return(
        <div className='regional_data_table'>
            <table>
                <tbody>
                    <tr className='table_row'>
                        <th colSpan='2' className='state_heading'>{data[0].state}</th>
                    </tr>
                    <tr className='table_row'>
                        <th>Active</th>
                        <td>{data[0].active}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Confirmed</th>
                        <td>{data[0].confirmed}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Deaths</th>
                        <td>{data[0].deaths}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Recovered</th>
                        <td>{data[0].recovered}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Last Updated</th>
                        <td>{data[0].lastupdatedtime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const DistrictTable = ({data}) => {
    return(
        <div className='regional_data_table'>
            <table>
                <tbody>
                    <tr className='table_row'>
                        <th colSpan='2' className='state_heading'>{data[0]}</th>
                    </tr>
                    <tr className='table_row'>
                        <th>Active</th>
                        <td>{data[1].active}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Confirmed</th>
                        <td>{data[1].confirmed}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Deaths</th>
                        <td>{data[1].deceased}</td>
                    </tr>
                    <tr className='table_row'>
                        <th>Recovered</th>
                        <td>{data[1].recovered}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export {StateTable};
export {DistrictTable}