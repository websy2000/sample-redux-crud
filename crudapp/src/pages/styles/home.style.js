import styled from "styled-components";

export const TableStyle = styled.table`
border:1px solid #d5d4d4;
width:100%;
margin-top:15px;

 & > thead > tr > th{
   padding:5px 0px;
   border:1px solid #d5d4d4;
 }

 & > tbody > tr > td{
    border:1px solid #d5d4d4;
    padding:5px 0px;
 }

 & > tbody > tr > td > img{
    margin-right:10px;
 }
`

export const AddUser = styled.button`
display:flex;
margin-top:10px;
margin-left:5px;
align-self: start;
align-items: left;
padding:14px 20px;
font-size:16px;
background-color:#7D7D7D;
border:none;
color:#fff;
border-radius:5px;
`

export const UsersPopUp = styled.div`
  position:absolute;
  top:24%;
  left:0;
  right:0;
  margin:0px auto;
  background-color:#fff;
  width:500px;
  height:320px;
  border: 1px solid #ddd;
  box-shadow: 5px 5px 15px #999999;
`

export const Userform = styled.form`
display:flex;
flex-direction: column;
padding:10px 15px;

& > input {
   padding:10px 0px;
   margin-top:8px;
}
`
export const FormBtn = styled.button`
margin-top:25px;
margin-right:10px;
padding:12px 20px;
background-color:#7D7D7D;
color:#fff;
font-size:14px;
font-weight:700;
border-radius:5px;
border:none;

`

export const UpdateDiv = styled.div`
 position:absolute;
  top:24%;
  left:0;
  right:0;
  margin:0px auto;
  background-color:#fff;
  width:400px;
  height:250px;
  border: 1px solid #ddd;
  box-shadow: 5px 5px 15px #999999;
  padding:20px 20px;

  & > h3{
   font-size:25px;
  }
`

export const UpdateForm = styled.form`
display:flex;
flex-direction: column;
padding:10px 15px;

& > input{
   padding:10px 10px;
   margin-top:8px;
}

`