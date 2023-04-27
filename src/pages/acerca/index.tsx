import { Header } from '@/components/Header';
import styles from '../../styles/AcercaStyle.module.css'
import {IconLink,AcercaContainer,Description,ProfileImage,SocialLinks} from '../../styles/AcercaStyle'


export default function Acerca(){
    return(
        <AcercaContainer className={`${styles.AcercaContainer}`}>
            <Header/>
            <main className="container">
            <ProfileImage
                src="/portada.jpg"
                alt="Profile picture"
                width={300}
                height={300}
            />
            <Description>
            Hola, soy Mario Coyo Layme.
            Soy un desarrollador web apasionado por la creación de experiencias
            únicas y atractivas en la web. Me encanta trabajar con tecnologías web
            modernas como React, Next.js y TypeScript.
            </Description>
            <SocialLinks>
                <IconLink
                    href="https://www.linkedin.com/in/tu-perfil-en-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
                </IconLink>
            </SocialLinks>
            </main>
        </AcercaContainer>
    );
}