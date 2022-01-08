import { useNavigate } from "react-router-dom";
import * as C from "../styles";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else if (state.email === '' || state.github === '') {
            navigate('/step3')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        navigate('/')
        state.currentStep = 0;
        state.name = '';
        state.level = 0;
        state.email = '';
        state.github = '';
    }

    return (
        <Theme>
            <C.Container>
                <h2>{state.name.substring(0, state.name.indexOf(' '))}, seu cadastro foi enviado com sucesso</h2>
                <p>Quando uma de nossas empresas parceiras estiver buscando alguém com seu perfil ela entrará em contato com você por e-mail. Agora é só aguardar! 🤞</p>

                <hr />

                <h4>Informações enviadas:</h4>
                <p>Nome: {state.name}</p>
                <p>Email: {state.email}</p>
                <p>GitHub: https://github.com/{state.github}</p>
                <p>Nível: {state.level === 0 ? 'Iniciante' : 'Programador'}</p>

                <Link to="/step3" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Novo Cadastro</button>
            </C.Container>
        </Theme>
    );
}