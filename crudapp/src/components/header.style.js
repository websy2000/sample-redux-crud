import styled from "styled-components";

export const HeaderContainer = styled.div`
       display:flex;
       padding:15px 10px;
       justify-content: space-between;
       border-bottom:1px solid #dadada;
`;

export const HeaderUlContent = styled.ul`
    display:flex;
    list-style:none;
    padding:10px 10px;

    & > li{
        position:relative;
        padding:10px 30px 10px 10px;
        font-size:20px;
        font-weight: 700;
    }

    & > li > img{
        position:absolute !important;
        top:14px;
        right:4px;
    }
`;
export const PopUpData = styled.div`
    position:absolute;
    top:10%;
    right:4%;
    width:20%;
    background-color: #fff;
    border:1px solid #dedede;
    padding:10px 10px 30px 10px;
    box-shadow: 5px 5px 15px #999999;

    & > button{
    padding:10px 15px;
    margin-top:15px;
    background-color: #4461F0;
    color:#fff;
    font-size:14px;
    font-weight:700;
    border:none;
    border-radius:5px;
    }

    & > img{
        padding:5px 0px;
    }
    & > h3{
        padding:5px 0px;
        font-size:20px;
    }

    & > p {
        padding:5px 0px;
        font-size:16px;
    }
`;