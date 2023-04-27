
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        
        <section >
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
            size="4.5rem"/>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com')}
            size="4.5rem"/>
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
            size="4.5rem"/>
        </section>
      </div>
    </Container>
  );
}

export default Footer;