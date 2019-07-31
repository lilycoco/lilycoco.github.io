import { Nav } from 'react-bootstrap'
import { Img } from '../Style'

export const SocialIcon = (props: { href: string; src: string }) => (
  <Nav.Link href={props.href} target='_blank' style={{ padding: '8px' }}>
    <Img src={props.src} />
  </Nav.Link>
)
