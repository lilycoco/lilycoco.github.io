import styled from 'styled-components'
import Link from 'next/link'

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  padding: 0 24px;
  background-color: #dda0dd;
`
const Title = styled.a`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
`

const Nav = styled.nav`
  flex-grow: 1;
  padding: 0 40px;
`

const Ul = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

const Li = styled.li`
  margin: 0 8px;
`

const LinkText = styled.span`
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 0px 18px;
  user-select: none;
`

export const Header = () => (
  <HeaderWrapper>
    <Link href='/'>
      <Title>Lilycoco</Title>
    </Link>
    <Nav>
      <Ul>
        <Li>
          <Link href='/blog'>
            <LinkText>My Blog</LinkText>
          </Link>
        </Li>
      </Ul>
    </Nav>
  </HeaderWrapper>
)
