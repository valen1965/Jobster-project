import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            blanditiis recusandae iusto maiores commodi quidem dolorem
            consequuntur, autem dolores voluptatibus quos ullam omnis nobis
            facere amet vero, soluta reiciendis culpa? Debitis earum illum
            voluptas, quae blanditiis officia sunt harum excepturi!
          </p>
          <Link to='/register' className='btn btn-hero'>
            login/register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
