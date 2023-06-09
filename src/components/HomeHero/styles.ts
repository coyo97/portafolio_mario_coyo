import styled from 'styled-components';
import styles from '@/styles/theme'

export const Container = styled.div`
width: 100%;
display: flex;
gap: 2rem;
align-items: center;
justify-content: center;
margin-top: 5rem;
> image {
  width: 40rem;
  flex: 1;
}
> div {
  flex: 4;
}
@media (max-width: 1450px) {
  > img {
    width: 30rem;
  }
  > div {
    flex: 1;
  }
}
@media (max-width: 1000px) {
  > img {
    width: 22rem;
  }
}

`;
export const TextContainer = styled.section`
margin-bottom: 2rem;
width: 100%;
h1 {
  font-size: 8rem;
  color: #0EE7B7;
}
h2 {
  font-size: 3rem;
  font-weight: 400;
  color: #7AC7E3;
  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
}`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: 'linear-gradient(225deg, #313860 0%, #11172B 100%);
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  &:hover {
    filter: brightness(1.2);
  }
`;