import React, { Component, useContext, useEffect } from "react"
// import { UserContext } from "../UsersProvider"
import { Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Nav.css"
import Home from '../../images/home-icon.png'
import ProfilePic from '../../images/angieGlasses.jpg'





export const NavBar = () => {
    
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate(`/`)
    }

    return (
        <>
            <Nav defaultActiveKey="/home" 
            className="nav-menu">
                <img width="5%" alt="profile_picture" src={ProfilePic}/>
                <button className="btnLogout" onClick={handleLogout}>Logout</button>
            </Nav>

            {/* </section> */}

        </>

    )
}

export default NavBar