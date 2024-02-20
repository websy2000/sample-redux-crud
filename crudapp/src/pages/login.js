import React,{useState} from 'react';
import {LoginContainer, LoginForm} from '../pages/styles/login.style';
import { GlobalConent } from '../constants/globalcontent';
import { getLoginUrl } from '../services/service';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const redirectHomePage = async() => {
        const response = await getLoginUrl(email, password);
        if(response.access_token){
          navigate(`/home`);
        } else{
            console.log('error');
        }
        console.log(response);
    }

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }
    return(
        <LoginContainer>
        <LoginForm>
            <h2>{GlobalConent.LoginContent.FORM_TITLE}</h2>
            <input type="email" id="email" name="email" placeholder='Enter your email' onChange={emailChange} />
            <input type="password" id="password" name="password" placeholder='Enter your password' onChange={passwordChange} />
            <div>
            <button type="button" onClick={redirectHomePage}>{GlobalConent.LoginContent.FORM_BTN}</button>
            </div>
        </LoginForm>
        </LoginContainer>
    )
}


export default LoginPage;