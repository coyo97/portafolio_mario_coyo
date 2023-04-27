import { ReactNode } from 'react';

import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ProyectoItem from './ProyectoItem';
import next from 'next/link';
import Link from 'next/link';
interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}


export function Proyectos() {
  return (
    <Container>
    <SectionTitle title="Ultimos Projetos" />

    <section>
      
    </section>
    <button type="button">
      <Link href="/projetos" passHref={true} legacyBehavior={true}>
        <a>Ver todos os projetos</a>
      </Link>
    </button>
  </Container>
  );
}
