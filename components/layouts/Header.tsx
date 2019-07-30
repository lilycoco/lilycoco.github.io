import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { reversedContentsList } from '../../lib/home'
import { navStyle } from '../../styled/Header'
import { Img, Span } from './Style'

const SocialIcon = (props: { href: string; src: string }) => (
  <Nav.Link href={props.href} target='_blank' style={{ padding: '8px' }}>
    <Img src={props.src} />
  </Nav.Link>
)

export const Header = () => (
  <Navbar bg='light' fixed='top' expand='lg' variant='light'>
    <Navbar.Brand href='/home' style={navStyle}>
      <Span>
        <Img src='/static/icon/water_lily.png' />
      </Span>
      Lilycoco
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto' style={navStyle}>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link href='/blog'>Blog</Nav.Link>
        <NavDropdown title='Play Game' id='basic-nav-dropdown' style={navStyle}>
          {reversedContentsList.map((column) => (
            <NavDropdown.Item href={column.url} target='_blank'>
              {column.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
      <SocialIcon href='https://github.com/lilycoco' src='/static/icon/github.png' />
      <SocialIcon href='https://twitter.com/llccr27' src='/static/icon/twitter.png' />
    </Navbar.Collapse>
  </Navbar>
)
