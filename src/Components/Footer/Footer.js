import React from 'react';

import './Footer.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className='footer'>
            <h1 className='heading'>The Pandemic</h1>
            <div className='row'>
                <div className='credits col1of2'>Built by <a href="https://www.linkedin.com/in/yashwanth-kolli-37b3031b4/">Yashwanth Kolli</a>.
                Copyright &copy; by Yashwanth Kolli. You are 100% allowed to use this webpage for personal, but NOT to claim it as your own. <p>Design credits: <a href='https://www.udemy.com/user/jonasschmedtmann/'>Jonas Schmedtmann</a></p></div>
                <div className='apis-used col1of2'>Api's used:
                    <ul>
                        <li><a href='https://api.covid19india.org/data.json'>National and State Data</a></li>
                        <li><a href='https://api.covid19india.org/state_district_wise.json'>Districtwise Data</a></li>
                        <li><a href='https://disease.sh/v3/covid-19/vaccine'>Vaccine Info</a></li>
                    </ul>
                    <p>Visit: <a href='https://disease.sh/v3/covid-19/vaccine'>covid19india.org</a></p>
                </div>
            </div>
            <div className='social_media'>
                <a href='https://instagram.com/yash__yeah_me?igshid=pgdsrdodr4n6'><FontAwesomeIcon className='icon_instagram' icon={faInstagram} /></a>
                <a href='https://m.facebook.com/yashwanth.kolli.18?ref=bookmarks'><FontAwesomeIcon className='icon_facebook' icon={faFacebookF} /></a>
                <a href='https://www.linkedin.com/in/yashwanth-kolli-37b3031b4/'><FontAwesomeIcon className='icon_linkedin' icon={faLinkedinIn} /></a>
                <a href='https://github.com/PerfectN008'><FontAwesomeIcon className='icon_github' icon={faGithub} /></a>
            </div>
        </div>
    )
}

export default Footer;