
import { Container } from './styles';
import NavLink from './NavLink';
import styles from '@/styles/Header.module.css';
export function Header() {
  return (
    <Container className={`${styles.container}`}>
      <ul className={`${styles.textHeader}`}>
        <NavLink title="Acerca de mi" path="/acerca" includes/>
        <NavLink title="Habilidades" path="/habilidades" includes/>
        <NavLink title="Proyectos" path="/proyectos" includes/>
        <NavLink title="Experiencia laboral" path="/experiencia_laboral" includes/>
        <NavLink title="Educacion" path="/educacion" includes/>
        <NavLink title="Contacto" path="/contacto" includes/>
      </ul>
    </Container>
  );
}
