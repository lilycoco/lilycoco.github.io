import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Img = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  object-fit: cover;
`
const nav = {
  display: 'flex',
  alignItems: 'center',
}

const NavDropDownItem = (props: { href: string; children: string }) => (
  <NavDropdown.Item href={props.href} target='_blank'>
    {props.children}
  </NavDropdown.Item>
)

const SocialIcon = (props: { href: string; src: string }) => (
  <Nav.Link href={props.href} target='_blank' style={{ padding: '8px' }}>
    <Img src={props.src} />
  </Nav.Link>
)

export const Header = () => (
  <Navbar bg='light' fixed='top' expand='lg' variant='light'>
    <Navbar.Brand href='/home' style={nav}>
      <span style={{ paddingRight: '3px' }}>
        <Img src='/static/icon/water_lily.png' />
      </span>
      Lilycoco
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto' style={nav}>
        <Nav.Link href='/home' children='Home' />
        <Nav.Link href='/blog' children='Blog' />
        <NavDropdown title='Play Game' id='basic-nav-dropdown' style={nav}>
          <NavDropDownItem
            href='https://lilycoco-spaceinvaders.netlify.com/'
            children='Space Invaders'
          />
          <NavDropDownItem href='https://lilycoco-tetris.netlify.com/' children='Tetris' />
          <NavDropDownItem href='https://mugensweeper.netlify.com/' children='Mugen Sweeper' />
          <NavDropdown.Divider />
          <NavDropDownItem href='/ticTacToe' children='Tic Tac Toe' />
          <NavDropDownItem href='/tetris' children='Tetris with React' />
        </NavDropdown>
      </Nav>
      <SocialIcon href='https://github.com/lilycoco' src='/static/icon/github.png' />
      <SocialIcon href='https://twitter.com/llccr27' src='/static/icon/twitter.png' />
    </Navbar.Collapse>
  </Navbar>
)
