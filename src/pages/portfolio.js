import * as React from 'react';
import { Tabs } from '../components/Tabs/Tabs';
import { PageTemplate } from './../components/PageTemplate';
import './index.css'

const workExperiences = [
    {
        "name": "Intuit",
        "role": "Software Developer Co-op",
        "startDate": "Jan 2018",
        "endDate": "Aug 2018",
        "contents": [
            "Front-end developer for Quickbooks Online",
            "Ran spikes on new charting libraries to improve widget loading speed",
            "Develop brand new UI for onboarding steps to help classify user business types",
            "Improve code quality by writing new unit tests and end-to-end tests",
            "Utilized JavaScript, Reactjs"
        ]
    },
    {
        "name": "Showbie",
        "role": "Fullstack Developer",
        "startDate": "June 2019",
        "endDate": null,
        "contents": [
            "Fullstack Developer for Socrative",
            "Develop scalable and performant back-end APIs for front-end consumption",
            "Kick-started code quality improvement by introducing unit testing to the codebase",
            "Build new email modal for teachers to send personalized PDF results to students",
            "Assist with technical planning for features",
            "Conduct code reviews to ensure quality and standards",
            "Utilized TypeScript, Reactjs, Nodejs, express, Objectionjs"
        ]
    }
]

const PortfolioPage = () => {
    return (
        <PageTemplate className="flex flex-col items-center">
            <title>Portfolio and Experience</title>
            <h1 className="text-4xl text-white">My Projects</h1>
            <div className="flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl">Work Experience</h2>
                <Tabs tabsContent={workExperiences}/>
            </div>
        </PageTemplate>
    )
}   

export default PortfolioPage
