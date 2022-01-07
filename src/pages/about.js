import * as React from 'react';
import PogchampPhoto from '../images/pogchamp_picture.jpg'
import {Card} from '../components/Card'

import './index.css'
import { PageTemplate } from '../components/PageTemplate';

const About = () => {
    return (
        <PageTemplate>
            <div className=" w-2/5">
                <h1 className="pb-4 text-white text-4xl"> Hi There</h1>
                <div className="py-6 flex justify-center">
                        <img className="rounded-full" src={PogchampPhoto}/>
                </div>
                <p className="text-white text-xl">
                    My name is Henry and I'm a fullstack software developer currently working in the Ed Tech industry.
                    This blog is a personal project that was built on top of my passion for food and software development.
                    Here, I'll be sharing my experiences and moments with friends as we try out the great foods around the world
                    as well as my experimentation of new technologies to grow my skills as a developer.
                </p>
            </div>
        </PageTemplate>
    )
}   

export default About
