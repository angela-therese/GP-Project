import React, { useEffect,  useState }  from "react"

// import { UserContext } from "../UsersProvider"
import { Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate, Link} from "react-router-dom"
import "./Nav.css"
import Home from '../../images/home-icon.png'
import ProfilePic from '../../images/angieGlasses.jpg'
import Logo from '../../images/GrowPath.png'





export const NavBar = () => {
    
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate(`/`)
    }

    
    const [growpathUser, setGrowPathUser] = useState({});
    useEffect(() => {
        const growpathUser = JSON.parse(localStorage.getItem('growpathUser'));
        if (growpathUser){
            setGrowPathUser(growpathUser)
        }
    }, {})

  


    return (
        <>
            <Nav defaultActiveKey="/home" 
            className="nav-menu">
                
                <div className="left-nav">
                <img className="logo-nav-image" width="60px" alt="profile_picture" src={Logo}/>
                <Link className="header-text" to={`/user/${growpathUser.id}`}><h1>GrowPath</h1></Link>
                
                
             
                
                </div>
                
                <div className="right-nav">
                <img className="profile-image" width="7%" height="7%" alt="profile_picture" src={ProfilePic}/>
                
                <h3>{growpathUser.firstName} {growpathUser.lastName}</h3>
                <button className="btnLogout" onClick={handleLogout}>Logout</button>
                
               
                </div>
                
            </Nav>

            {/* </section> */}

        </>

    )
}

export default NavBar