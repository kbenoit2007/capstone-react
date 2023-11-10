import './BackButton.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function BackButton(){
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(-1);
    }
    
    return(<div>
    <ArrowBackIcon onClick={handleClick} sx={{ fontSize: '4rem' }} />
    </div>)
}

export default BackButton