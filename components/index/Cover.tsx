import { JumboTron, CoverImage, JumboTronHeading, JumboTronContainer } from './Style'

export const Cover = () => (
  <CoverImage>
    <JumboTron className='jumbotron text-center'>
      <JumboTronContainer className='container'>
        <JumboTronHeading className='jumbotron-heading'>Welcome to my page!</JumboTronHeading>
        <p className='lead'>
          This is Lilycoco's website, who is a React.js, Node.js and TypeScript developer.
        </p>
      </JumboTronContainer>
    </JumboTron>
    <style>
      {`
    @media (min-width: 768px) {
      .jumbotron {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
    }
    .jumbotron p:last-child {
      margin-bottom: 0;
    }
    `}
    </style>
  </CoverImage>
)
