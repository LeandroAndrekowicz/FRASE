import { useNavigate } from 'react-router';
import './Button.css';

export const Button = ({ text, reference } : { text : string, reference : string }) => {

    const navigate = useNavigate();

    return(
        <div className='button'>
            <button onClick={() => navigate(`/${reference}`)}>
                {text}
            </button>
        </div>
    )
}