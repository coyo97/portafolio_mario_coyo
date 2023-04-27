import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProyectoContainer } from './styles';

interface ProyectoProps {
  title: string;
  type: string;
  slug: string;
  
}

export default function ProyectoItem({ title, type, slug }: ProyectoProps) {
  return (
    <ProyectoContainer  data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProyectoContainer>
  );
}