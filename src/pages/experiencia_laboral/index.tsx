import { Header } from "@/components/Header"
import {Container} from './styles'
import { SectionTitle } from "@/components/SectionTitle"
import ExperienciaItem from "@/components/Experiencias/ExperienciaItem"
import styles from '../../styles/Experiencias.module.css'

export default function Experienci(){
    return(
        <Container className={`${styles.container}`}>
            <Header/>
            <SectionTitle title="1 año" description="de experiência" />
            <section>
                <ExperienciaItem 
                    year="mes 1, 2, 3"
                    title="Dev Front-end"
                    description="Como desarrollador front-end, mis responsabilidades incluyen crear y mantener la interfaz de usuario
                     de aplicaciones web. Esto implica trabajar en el diseño, desarrollo y optimización de la interfaz de usuario 
                     utilizando tecnologías como HTML, CSS y JavaScript."
                />
                <ExperienciaItem
                    year="mes 4,5,6"
                    title="Dev Front-sasend"
                    description="Como desarrollador front-end, mis responsabilidades incluyen crear y mantener la interfaz de usuario
                    de aplicaciones web. Esto implica trabajar en el diseño, desarrollo y optimización de la interfaz de usuario 
                    utilizando tecnologías como HTML, CSS y JavaScript."
                />
                <ExperienciaItem
                    year="mes 7, 8, 9"
                    title="Dev Frondsa dsa t-end"
                    description="Como desarrollador front-end, mis responsabilidades incluyen crear y mantener la interfaz de usuario
                    de aplicaciones web. Esto implica trabajar en el diseño, desarrollo y optimización de la interfaz de usuario 
                    utilizando tecnologías como HTML, CSS y JavaScript."
                />
                <ExperienciaItem
                    year="mes 10, 11, 12"
                    title="Dev Front-end"
                    description="Como desarrollador front-end, mis responsabilidades incluyen crear y mantener la interfaz de usuario
                    de aplicaciones web. Esto implica trabajar en el diseño, desarrollo y optimización de la interfaz de usuario 
                    utilizando tecnologías como HTML, CSS y JavaScript."
                />
            </section>
        </Container>
    )
}