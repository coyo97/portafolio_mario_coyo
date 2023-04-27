import styled from 'styled-components';
import Image from 'next/image';

export const AcercaContainer = styled.div`
  
`;
export const ProfileImage = styled(Image)`
  border-radius: 80%;
`;
export const Description = styled.p`
  margin: 1rem 0;
  text-align: center;
  max-width: 600px;
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  > * + * {
    margin-left: 1rem;
  }
`;
export const IconLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;
