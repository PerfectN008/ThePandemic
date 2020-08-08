import React from 'react';

import './Header.styles.scss';

const Header = () => {
    return(
        <div className='header'>
            <div className='text_box'>
                <h1 className='heading_primary'>{'The Pandemic'.toUpperCase()}</h1>
                <h2 className='heading_secondary'>COVID-19 Statistics In India</h2>
            </div>
        </div>
    )
}

export default Header;