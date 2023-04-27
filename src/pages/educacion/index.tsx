import { ReactNode } from 'react';

import { Container } from './styles';
import { Header } from '@/components/Header';


export default function Educacion() {
  return (
    <Container>
      <Header/> 
      <div>
      <h1>Mis Títulos y Cursos Relevantes</h1>
      <ul>
        <li>
          <h2>Título Colegio</h2>
          <p>Institución: Colegio mixto 9 de abril.De Villazon</p>
          <p>Fecha de finalización: 2018</p>
        </li>
        <li>
          <h2>Curso relevante: Universidad de Java</h2>
          <p>Institución: Udemy</p>
          <p>Fecha de finalización: 2021</p>
        </li>
        <li>
          <h2>Curso relevante: JavaScript Moderno</h2>
          <p>Institución: Udemy</p>
          <p>Fecha de finalización: 2022</p>
        </li>
      </ul>
    </div>
    </Container>
  );
}
