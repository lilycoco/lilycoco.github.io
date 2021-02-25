import { JumboTron, CoverImage, JumboTronHeading, JumboTronContainer } from './Style'

export const Cover = () => (
  <CoverImage>
    <JumboTron className='text-center'>
      <JumboTronContainer className='container'>
        <JumboTronHeading className='jumbotron-heading'>Welcome to my page!</JumboTronHeading>
        <p className='lead'>
          This is Lilycoco's website
        </p>
      </JumboTronContainer>
    </JumboTron>
  </CoverImage>
)
