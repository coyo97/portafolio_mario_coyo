import {FormContainer, Input, TextArea} from './styles'
export default  function Form(){
    return(
        <FormContainer>
            <form>
                <Input placeholder="Nombre" required/>
                <Input placeholder="E-mail" type="email" required/>
                <TextArea placeholder="Message" required/>
                <button type='submit'>
                    Enviar
                </button>
            </form>
        </FormContainer>
    )
}