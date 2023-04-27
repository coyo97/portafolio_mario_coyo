import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid linear-gradient(225deg, #313860 0%, #11172B 100%);
  height: 5rem;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background: none;
      border: none;
      color: #7AC7E3;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }
    > section {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        width: 2rem;
        height: 2rem;
        color: #848DA0;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: #0EE7B7;
        }
      }
    }
    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }
      > section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;