import * as React from "react"
import './index.css'

import NavBar from "../components/Navbar"
import Background from '../components/Background';
import { PageTemplate } from './../components/PageTemplate';

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "100vh"
}

// markup
const IndexPage = () => {
  return (
    <PageTemplate>
      <div className="index-text-container sm:py-8 px-8 py-4 w-max">
        <div className="flex sm:flex-row flex-col">
          <div className="max-w-xl text-white">
            <h1 className="text-white text-4xl font-thin pb-4">Hi there</h1>
            <p style={{animationDelay: "150ms"}} className="text-xl">My name is Henry.</p>
            <p style={{animationDelay: "300ms"}} className="text-xl">I'm a full stack Javascript developer. My current focus is improving the classroom experience for teachers and students.</p>
            <p className="text-xl">This site was built to share my life.</p>
        </div>
        </div>
        <div className="py-8">
          <h1 className="text-white text-4xl font-thin">Latest Activities</h1>
        </div>
      </div>
    </PageTemplate>
  )
}

export default IndexPage
