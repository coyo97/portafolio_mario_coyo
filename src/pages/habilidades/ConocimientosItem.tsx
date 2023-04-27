import { ReactNode } from 'react';
import { ConocimientoContainer } from './styles';

interface ConhecimentoProps {
  title: string;
  icon: ReactNode;
}

export default function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
  return (
    <ConocimientoContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ConocimientoContainer>
  );
}