import Input from '../../components/Input'
import './Login.css'

const Login = () => {
  return (
    <div className='container-login'>
        <div className='container-welcome'>
          <div className='container-welcome-title'>
            <h2>Bem Vindo!</h2>
          </div>

          <div className='container-welcome-input'>
            <Input type='text' name='email' placeholder='Email'/>
            <Input type='password' name='password' placeholder='Senha' />
            <h2>Esqueci minha senha</h2>
          </div>


        </div>
    </div>
  )
}

export default Login