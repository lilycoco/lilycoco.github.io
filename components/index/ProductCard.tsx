import { Card } from 'react-bootstrap'
import { Buttons } from './Buttons'
import { ProductConfig } from '../../models/Index'
import { DeployDate } from './Style'
import moment from 'moment'

export const ProductCard = ({ item, onClick }: ProductConfig) => (
  <div className='col-md-4'>
    <div className='card mb-4 shadow-sm'>
      <Card.Img variant='top' src={item.imgSrc} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.text}</Card.Text>
        <Buttons item={item} onClick={(i: string, id: number) => onClick(i, id)} />
        <DeployDate className='text-muted'>{moment(item.date).format('MMM DD, Y')}</DeployDate>
      </Card.Body>
    </div>
  </div>
)
