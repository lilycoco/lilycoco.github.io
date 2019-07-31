import { Navbar } from 'react-bootstrap'
import { navStyle } from '../../../styled/Header'
import { Icon, Span } from '../Style'
import { HeaderNavCollapse } from './NavberCollapse'

export const Header = () => (
  <Navbar bg='light' fixed='top' expand='lg' variant='light'>
    <Navbar.Brand href='/home' style={navStyle}>
      <Span>
        <Icon src='/static/icon/water_lily.png' />
      </Span>
      Lilycoco
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <HeaderNavCollapse />
  </Navbar>
)
