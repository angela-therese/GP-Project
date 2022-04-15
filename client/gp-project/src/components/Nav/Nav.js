import React, { useEffect,  useState }  from "react"
import { useNavigate, Link} from "react-router-dom"
import "./Nav.css"
import ProfilePic from '../../images/headshot.jpg'
import Logo from '../../images/logo-circle-text.png'





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
            <nav defaultActiveKey="/home" 
            className="nav-menu">
                
                <div className="left-nav">
                <img className="logo-nav-image" width="80px" alt="profile_picture" src={Logo}/>
                <Link className="header-text" to={`/user/${growpathUser.id}`}><h1>GrowPath</h1></Link>
                </div>
                

                <div className="middle-nav">
                    <h2 className="font-light">Welcome back, {growpathUser.firstName}! How's it growing?</h2>
                </div>



                <div className="right-nav">
                <img className="profile-image" width="8%" alt="profile_picture" src={ProfilePic}/>
                <button className="btnLogout" onClick={handleLogout}>Logout</button>
                </div>
                
            </nav>

           

        </>

    )
}

export default NavBar