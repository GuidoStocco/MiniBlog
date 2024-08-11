import styles from './Register.module.css';


const Register = () => {
    return(
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" name='displayName' placeholder='Digite seu nome' required/>
                </label>

                <label>
                    <span>E-mail:</span>
                    <input type="email" name='email' placeholder='Digite seu email' required/>
                </label>

                <label>
                    <span>Senha:</span>
                    <input type="password" name='password' placeholder='Digite sua senha' required/>
                </label>

                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name='confirmPassword' placeholder='Confirme sua senha' required/>
                </label>
            </form>
        </div>
    )
};

export default Register;