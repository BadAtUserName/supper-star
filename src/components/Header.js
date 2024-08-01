import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import SupperStarLogo from '../app/img/Supper-Star.png'; 


const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
        <NavbarBrand className='ms-5' href='/'>
            <img src={SupperStarLogo} alt='Supper star logo' className='float-start' />
            <h1 className='mt-1'>SUPPER STAR</h1>
        </NavbarBrand>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-list fa-lg' /> Directory
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <i className='fa fa-info fa-lg' /> About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
    </Navbar>
);
}

export default Header;