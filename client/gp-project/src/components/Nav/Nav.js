import React, { Component, useContext, useEffect } from "react"
// import { UserContext } from "../UsersProvider"
import { Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./Nav.css"




export const NavBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate(`/`)

    }

    return (
        <>
            <div className="container">
            <Nav defaultActiveKey="/home" 
            className="nav-menu">
                <Button className="btnLogout" onClick={handleLogout}>Logout</Button>
            </Nav>
            </div>
            {/* </section> */}

        </>

    )
}

export default NavBar