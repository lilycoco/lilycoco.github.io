import { Nav } from 'react-bootstrap'
import { Icon } from '../Style'

export const SocialIcon = ({ href, src }: { href: string; src: string }) => (
  <Nav.Link href={href} target='_blank' style={{ padding: '8px' }}>
    <Icon src={src} />
  </Nav.Link>
)
