import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import ConhecimentoItem from './ConocimientosItem';
import { Container } from './styles';
import { Header } from '@/components/Header';
import { SectionTitle } from "@/components/SectionTitle"

export default function habilidades() {
  return (
    <Container>
      <Header/>
      <SectionTitle title="Habilidades" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
