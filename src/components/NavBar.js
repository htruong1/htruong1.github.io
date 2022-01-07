import { Link } from "gatsby"
import * as React from "react"
import './NavBar.css'
import { IconButton } from './IconButton';
import GithubLogo from '../images/GitHub-Mark-Light-32px.png'
import LinkedInPhoto from '../images/linkedin-32.png'
import InstagramIcon from '../images/Instagram_Glyph_Gradient_RGB.png'

//TODO-henry: make hamburgurlar menu for small viewports

const mdBreakpoint = 649;

const NavLink = ({route, children}) => {
    return (
        <li className="p-2">
           <Link className="text-white text-2xl" to={`/${route}`}>{children}</Link>
        </li>
    )
}

const NavLinkTabs = ({route, children}) => {
    return (
        <li className="flex-auto menu-button_border">
            <Link className="text-white text-lg w-full h-full text-center flex justify-center items-center" to={`/${route}`}>{children}</Link>
        </li>
    )
}

const DropDownMenu = ({handleOnClick}) => {
    return (
        <div className="dropdown-menu absolute w-full bg-red-600 flex flex-col">
            <ul className="flex flex-col h-full py-4">
                <NavLinkTabs route="">Home</NavLinkTabs>
                <NavLinkTabs route="about">About</NavLinkTabs>
                <NavLinkTabs route="portfolio">Portfolio</NavLinkTabs>
                <NavLinkTabs route="blog">Blog</NavLinkTabs>
                <NavLinkTabs route="contact">Contact</NavLinkTabs>
            </ul>
        </div>
    );
}

const HamburglarMenu = ({handleOnClick, children}) => {
    return (
        <div className="absolute top-4 left-8">
            <button onClick={handleOnClick}>
                <div className='bg-white hamburglar w-6'/>
                <div className='bg-white hamburglar w-6'/>
                <div className='bg-white hamburglar w-6'/>
            </button>
        </div>
    )
}

const NavBar = ({currentTab}) => {
    const [showMenu, setShowMenu] = React.useState(false);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const isMobile = windowWidth <= mdBreakpoint;

    React.useEffect(() => {
        const eventId = window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        });

        return () => {
            window.removeEventListener('resize', eventId);
        }
    }, [])

    // hamburgular menu for mobile mode
    if(isMobile) {
        return (
            <>
                <HamburglarMenu handleOnClick={()=>setShowMenu(true)}/>
                {showMenu && (
                    <>
                    <DropDownMenu handleOnClick={()=>setShowMenu(false)}/>
                    <button className="text-white absolute" onClick={() => setShowMenu(false)}>X</button>
                    </>
                    )
                }
            </>
        )
    } else {
        return  (
            <div style={{"minWidth": "18rem"}} className="sticky py-4 px-8 navbar flex flex-col items-center h-screen justify-between min-w-min">
                <h1 className="text-white text-3xl">Henry Truong</h1>
                    <ul className="flex flex-col">
                        <NavLink route="">Home</NavLink>
                        <NavLink route="about">About</NavLink>
                        <NavLink route="portfolio">Portfolio</NavLink>
                        <NavLink route="blog">Blog</NavLink>
                        <NavLink route="contact">Contact</NavLink>
                </ul>
                <div className="flex">
                    <IconButton>
                        <img src={GithubLogo}/>
                   </IconButton>
                   <IconButton>
                       <img src={LinkedInPhoto}/>
                   </IconButton>
                   <IconButton>
                       <img width={32} height={32} src={InstagramIcon}/>
                   </IconButton>
                </div>
            </div>
        ) 
    }
}

export default NavBar
