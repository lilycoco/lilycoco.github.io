import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { navStyle } from '../../../style/Header'
import { reversedProductList } from '../../../lib/index'
import { SocialIcon } from './SocialIcon'
import { NavIcon } from '../Style'

export const NavberCollapse = () => (
  <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className='mr-auto' style={navStyle}>
      <Nav.Link target='_blank' href='https://lilycoco.hatenablog.com'>Blog</Nav.Link>
      <NavDropdown title='Play Game' id='basic-nav-dropdown' style={navStyle}>
        {reversedProductList.map((column) => (
          <NavDropdown.Item key={column.id} href={column.url}>
            <NavIcon src={column.iconImg} />
            {column.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
    <SocialIcon href='https://www.codewars.com/users/lilycoco' src='/static/icon/codewars2.webp' />
    <SocialIcon href='https://github.com/lilycoco' src='/static/icon/github.png' />
    <SocialIcon href='https://twitter.com/llccr27' src='/static/icon/twitter.png' />
  </Navbar.Collapse>
)
