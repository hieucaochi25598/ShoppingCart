import React from 'react'
import {Navbar, NavbarBrand ,Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import headerStyles from '../css/Header.module.css'
import navStyles from '../css/Nav.module.css'
const Header = () => {
    return (
        <Navbar className={headerStyles.header}>
            <NavbarBrand className={navStyles.header}>Elearning</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink>
                    <Link to="/courses-list">Danh Sach Khoa Hoc</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                    <Link to="/game-bau-cua">Game Bau Cua</Link>
                    </NavLink>
                </NavItem>
            
                <NavItem>
                    <NavLink>
                    <Link to="/demo-hook">Demo Hooks</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    <Link to="/register">Dang ky</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    <Link to="/login">Dang nhap</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    <Link to="/admin/create-courses">Them khoa hoc</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}
export default Header
