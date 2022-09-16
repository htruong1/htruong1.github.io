import { Link } from "gatsby"
import * as React from "react"
import './NavBar.css'
import { IconButton } from './IconButton';
import GithubLogo from '../images/GitHub-Mark-Light-32px.png'
import LinkedInPhoto from '../images/linkedin-32.png'
import InstagramIcon from '../images/Instagram_Glyph_Gradient_RGB.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
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
        <div className="h-1/2 w-full absolute navbar flex flex-col absolute">
            <ul className="flex flex-col h-screen py-4">
                <NavLinkTabs className="no-underline text-white" route="">Home</NavLinkTabs>
                {/* <NavLinkTabs className="no-underline text-white" route="about">About</NavLinkTabs> */}
                <NavLinkTabs className="no-underline text-white" route="portfolio">Portfolio</NavLinkTabs>
                <NavLinkTabs className="no-underline text-white" route="blog">Blog</NavLinkTabs>
                {/* <NavLinkTabs className="no-underline text-white" route="contact">Contact</NavLinkTabs> */}
            </ul>
        </div>
    );
}

const HamburglarMenu = ({handleOnClick, children}) => {
    return (
        <div className="absolute top-4 left-6">
            <button onClick={handleOnClick}>
                {/* <div className='bg-white hamburglar w-6'/>
                <div className='bg-white hamburglar w-6'/>
                <div className='bg-white hamburglar w-6'/> */}
                <MenuIcon sx={{width: "32px", height: "32px", color: "white"}}/>
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
                    <button className="text-white absolute top-4 left-6" onClick={() => setShowMenu(false)}>
                        <CloseIcon sx={{width: "32px", height:"32px"}}/>
                    </button>
                    </>
                    )
                }
            </>
        )
    } else {
        return  (
        <div className="sticky top-0 py-4 navbar flex justify-center z-10">
            <ul className="flex items-center justify-between w-full px-4">
                <h2 className="text-4xl text-white">Henry Truong</h2>
                    <div className="flex">
                    <NavLink route="">Home</NavLink>
                    <NavLink route="about">About</NavLink>
                    <NavLink route="portfolio">Portfolio</NavLink>
                    {/* <NavLink route="blog">Blog</NavLink> */}
                </div>
            </ul>
        </div>
        ) 
    }
}

export default NavBar
