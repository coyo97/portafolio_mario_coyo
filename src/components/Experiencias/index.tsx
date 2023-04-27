import { ReactNode } from 'react';
import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';
import styles from '@/styles/Experiencias.module.css'

interface ExperienciasProps {
  children: ReactNode;
}

export function Experiencias() {
  return (
    <Container className={`${styles.container}`}>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienciaItem 
          year="2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2019"
          title="Dev Front-sasend"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2020"
          title="Dev Frondsa dsa t-end"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}
