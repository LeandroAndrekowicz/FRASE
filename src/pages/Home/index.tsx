import './Home.css';
import Light from '../../assets/light.svg';
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button';


export const Home = () => {
    return(
        <div className='container-home'>
            <div className='container-center'>
                <div className='container-title'>
                    <img src={Light} alt="Light"/>
                    <div className='container-text'>
                        <h2>Frase</h2>
                        <span>Da Semana</span>
                    </div>
                </div>

                <div className='container-button'>
                    <Button text="Já tenho uma conta" reference="login" />
                    <Button text="Quero criar uma conta" reference='create-account'/>
                </div>

                <div className='container-logo'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}