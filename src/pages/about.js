import * as React from 'react';
import './index.css'
import { PageTemplate } from '../components/PageTemplate';
import SvgIcon from '@mui/material/SvgIcon';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';

const About = () => {
    // console.log(location, '###')

    return (
        <PageTemplate className="flex justify-center">
            <div style={{
                "background": "2596be"
            }} className="p-8 text-center flex flex-col justify-center items-center">
                <h1 className="text-4xl">About</h1>
                <div class="pt-4 flex p-4 flex-wrap justify-center w-1/2">
                    <div className="m-2">
                        <SvgIcon
                            fontSize="large"
                        >
                            <CodeIcon/>
                        </SvgIcon>
                        <p className="font-bold">Fullstack Software Engineer</p>
                    </div>
                    <div className="m-2">
                        <SvgIcon
                            fontSize="large"
                        >
                            <JavascriptIcon/>
                        </SvgIcon>
                        <p className="font-bold">
                            Fullstack JavaScript Tech Stack
                        </p>
                    </div>
                    <div className="m-2">
                        <SvgIcon
                            fontSize="large"
                        >
                            <StorageIcon/>
                        </SvgIcon>
                        <p className="font-bold">
                            SQL + noSQL Databases
                        </p>
                    </div>
                </div>
                <h1 className="text-3xl">But who am I?</h1>
                <div className="w-1/2 text-center">
                    <p className="pt-4">
                        Hi there! My name is Henry Truong. I'm a full stack software engineer currently
                        working at Showbie with a mission to improve the classroom experience for both
                        teachers and students.
                    </p>
                    <p className="mt-2">
                        These days, I am focused on web development. Striving to make a
                        <span className="font-bold"> positive impact</span>  on people's 
                        lives and the <span className="font-bold">limitless learning opportunities</span>  is what drives me.
                    </p>
                </div>
            </div>
         </PageTemplate>
    )
}   

export default About
