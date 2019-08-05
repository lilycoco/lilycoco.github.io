import { CoverImage } from './Style'

export const Cover = () => (
  <CoverImage>
    <section className='jumbotron text-center'>
      <div className='container'>
        <h1 className='jumbotron-heading'>Welcome to my page!</h1>
        <p className='lead'>
          This is Lilycoco's website, who is a React.js, Node.js and TypeScript developer.
        </p>
        <p>
          <a href='/home' className='btn btn-primary my-2'>
            Explore More
          </a>
        </p>
      </div>
      <style>
        {`
    .jumbotron {
      padding-top: 3rem;
      padding-bottom: 3rem;
      margin-bottom: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius:0;
    }
    @media (min-width: 768px) {
      .jumbotron {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
    }
    .jumbotron p:last-child {
      margin-bottom: 0;
    }
    .jumbotron-heading {
      font-weight: 300;
    }
    .jumbotron .container {
      max-width: 40rem;
      color: #1e376d;
    }
    `}
      </style>
    </section>
  </CoverImage>
)
