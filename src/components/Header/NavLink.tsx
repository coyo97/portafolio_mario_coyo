import styles from '@/styles/Header.module.css'
import Link from "next/link";
import {NavLinkContainer} from './styles'
import { useRouter } from 'next/router';

interface Props{
    title: string;
    path: string;
    includes?: boolean;
}

export default function NavLink({title, path, includes = false}: Props){
    const router=useRouter();
    function verifyIfIsActive() {
        if (includes) {
          return router.pathname.includes(path);
        }
        return path === router.pathname;
    }
    
      const isActive = verifyIfIsActive();

    return (
        <NavLinkContainer isActive = {isActive}>
            <Link href={path} passHref={true} legacyBehavior={true}>
                <a className={`${styles.textHeader}`}>{title}</a>
            </Link>
        </NavLinkContainer>
    )
}