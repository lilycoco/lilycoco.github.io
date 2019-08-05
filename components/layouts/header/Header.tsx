import { Navbar } from 'react-bootstrap'
import { navStyle } from '../../../style/Header'
import { Icon, Span } from '../Style'
import { NavberCollapse } from './NavberCollapse'

export const Header = () => (
  <Navbar bg='light' expand='lg' variant='light'>
    <Navbar.Brand href='/home' style={navStyle}>
      <Span>
        <Icon src='/static/icon/water_lily.png' />
      </Span>
      Lilycoco
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <NavberCollapse />
  </Navbar>
)
