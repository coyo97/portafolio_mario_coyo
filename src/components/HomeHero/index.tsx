import { ReactNode } from 'react';
import Image from 'next/image';
import { Container, TextContainer, InfosContainer,CodeItem} from './styles'
import styles from '@/styles/HomeHero.module.css'
import theme from '@/styles/theme'
export function HomeHero() {
  return (
    <Container className={`${styles.container}`}>
      <Image src="/portada.jpg" alt="Mi foto" width={360} height={400} priority />
      <div >
        <TextContainer className={`${styles.textContainer}`}>
          <h1 className={`${styles.h1}`}>Hola</h1>
          <h2 className={`${styles.h2}`}>Me llamo Mario</h2>
        </TextContainer>
        <InfosContainer className={`${styles.infoContainer}`}>
          <CodeItem data-aos="zoom-in" className={`${styles.codeItem}`}>
            <span className="comment">//Me presento </span>
            <span className="purple">Info</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Mario,</span>
            </div>
            <div>
              Sobrenombre: <span className="blue">Bob</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in" className={`${styles.codeItem}`}>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Rol: <span className="blue">Estudiante,</span>
            </div>
            <div>
              Universidad: <span className="blue">UATF</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
