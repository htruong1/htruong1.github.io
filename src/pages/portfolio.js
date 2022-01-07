import * as React from 'react';
import NavBar from '../components/Navbar';
import Background from '../components/Background';
import PogchampPhoto from '../images/pogchamp_picture.jpg'

import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';

import {Card} from '../components/Card'

// import { Card } from '@material-ui/core';


import './index.css'

const PortfolioPage = () => {
    return (
        <main id="main"  className="flex">
            <NavBar/>
            <title>Portfolio</title>
            <Background className="sm:p-8 flex-auto flex sm:items-center sm:justify-center">
            </Background>
        </main>
    )
}   

export default PortfolioPage
