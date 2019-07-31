import { Nav } from 'react-bootstrap'
import { Icon } from '../Style'

export const SocialIcon = (props: { href: string; src: string }) => (
  <Nav.Link href={props.href} target='_blank' style={{ padding: '8px' }}>
    <Icon src={props.src} />
  </Nav.Link>
)
