import styled from 'styled-components';

export const LoginContainer = styled.div`
    padding:50px 0px;
`;

export const LoginForm = styled.form`
   display:flex;
   justify-content:center;
   flex-direction:column;
   padding:5px 20px 30px 20px;
   width:20%;
   margin:0px auto;
   border:1px solid #DEDEDE;
   
   & > input{
    padding:10px 15px;
    margin-top:10px;
   }

   & > div > button{
    padding:10px 15px;
    margin-top:15px;
    background-color: #4461F0;
    color:#fff;
    font-size:14px;
    font-weight:700;
    border:none;
    border-radius:5px;
   }
`;