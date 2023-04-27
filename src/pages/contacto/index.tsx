import { Header } from "@/components/Header"
import Form from "./Form"
import {Container} from './styles'
import { SectionTitle } from "@/components/SectionTitle"
export default function Conttacto (){
    return(
        <Container>
            <Header/>
            <SectionTitle
                title={
                    <>
                        Precisa de
                        <br/>
                        de nuestro Servicio?
                    </>
                }
                description={
                    <>
                        Presentamos el siguiente formulario
                        <br/>
                        Le respodemos en breve
                    </>
                }
            />
            <Form/>
        </Container>
    )
}