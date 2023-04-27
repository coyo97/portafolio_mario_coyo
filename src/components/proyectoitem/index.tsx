import Link from 'next/link';
import { Container } from './styles'
import styles from '@/styles/ProyectoItem.module.css'
interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjetoItem({ title, type, imgUrl, slug }: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl} className={`${styles.Container}`}>   
      <Link href={`/proyectos/${slug}`} passHref={true} legacyBehavior={true}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h1>{type}</h1>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;