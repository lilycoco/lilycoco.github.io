import styled from 'styled-components'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Img = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

export const Header = () => (
  <Navbar bg='light' expand='lg' variant='light'>
    <Navbar.Brand href='/'>Lilycoco</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='https://github.com/lilycoco' target='_blank'>
          <Img src='/static/github.png' />
        </Nav.Link>
        <Nav.Link href='https://twitter.com/llccr27' target='_blank'>
          <Img src='/static/twitter.png' />
        </Nav.Link>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/blog'>Blog</Nav.Link>
        <NavDropdown title='Play Game' id='basic-nav-dropdown'>
          <NavDropdown.Item href='https://lilycoco-spaceinvaders.netlify.com/' target='_blank'>
            Space Invaders
          </NavDropdown.Item>
          <NavDropdown.Item href='https://lilicoco-tetris.netlify.com/' target='_blank'>
            Tetris
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='https://mugensweeper.netlify.com/' target='_blank'>
            Mugen Sweeper
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-success'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
