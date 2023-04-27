import { Header } from '@/components/Header';
import styles from '../../styles/AcercaStyle.module.css'
import {IconLink,AcercaContainer,Description,ProfileImage,SocialLinks} from '../../styles/AcercaStyle'


export default function Acerca(){
    return(
        <AcercaContainer className={`${styles.AcercaContainer}`}>
            <Header/>
            <main>
            <div>
            <h1>Descripción Personal</h1>
            <p> Hola, soy Mario Coyo Layme.
                Soy un desarrollador web apasionado por la creación de experiencias
                únicas y atractivas en la web. Me encanta trabajar con tecnologías web
                modernas como React, Next.js y TypeScript.</p>
                <ProfileImage
                    src="/portada.jpg"
                    alt="Profile picture"
                    width={300}
                    height={300}
            />
            <h2>Redes Sociales</h2>
            <ul>
                <li>
                    <a href="https://url-de-tu-perfil-en-twitter.com">Twitter</a>
                </li>
            <li>
                <a href="https://url-de-tu-perfil-en-github.com">Github</a>
            </li>
            <li>
                <a href="https://url-de-tu-perfil-en-linkedin.com">LinkedIn</a>
            </li>
                </ul>
                </div>
            </main>
        </AcercaContainer>
    );
}