import { Header } from '@/components/Header';
import styles from '../../styles/ProyctosStyle.module.css'
import {ProyectosContainer} from '../../styles/ProyectosContainer'
import ProyectoItem from '../../components/proyectoitem'
export default function Proyectos(){
    return(
        <ProyectosContainer className={`${styles.ProyectosContainer}`}>
            <Header/>
            <main className="container">
                <ProyectoItem
                title="Proyecto o1"
                type="website"
                slug="test"
                imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
                />
                <ProyectoItem
                title="Proyecto o2"
                type="website"
                slug="test"
                imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
                />
                <ProyectoItem
                title="Proyecto o3"
                type="website"
                slug="test"
                imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
                />
                <ProyectoItem
                title="Proyecto o4"
                type="website"
                slug="test"
                imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
                />
            </main>
        </ProyectosContainer>
    );
}