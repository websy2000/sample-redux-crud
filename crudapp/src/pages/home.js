import React, { useEffect, useState } from 'react';
import LayoutComponent from '../components/layout';
import { UserAction, userDetailsById, AddNewUserToUsers, updateUserByData } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from "../images/edit.png";
import EyeIcon from "../images/view.png";
import DeleteIcon from "../images/delete.png";
import { TableStyle, AddUser, UsersPopUp, Userform, FormBtn, UpdateDiv, UpdateForm } from './styles/home.style';
import { GlobalConent } from '../constants/globalcontent';


const HomePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [updatedData, setUpdatedData] = useState({})
    const [editEmail, setEditEmail] = useState('');
    const [editName, setEditName] = useState('');

    const [addUsers, setAddUsers] = useState(false);
    const dispatch = useDispatch();

    const userList = useSelector(state => state?.allUsers?.getAllUserData);


    const AddUsers = () => {
        setAddUsers(true);
    }
    const CloseUserForm = () => {
        setAddUsers(false);
    }

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const avatarChange = (event) => {
        setAvatar(event.target.value);
    }

    const sendUserCreateData = () => {
        dispatch(AddNewUserToUsers(name, email, password, avatar));
    }

    const updateForm = (item) => {
        setUpdatedData(item)
        setUpdatePopUp(true);
    }

    const closeUpdateForm = () => {
        setUpdatePopUp(false);
    }

    const updateUserForm = () => {
        dispatch(updateUserByData(updatedData.id, editEmail, editName));
        setUpdatePopUp(false);

    }

    const updateEmail = (event) => {
        setEditEmail(event.target.value)
    }

    const updateName = (event) => {
        setEditName(event.target.value);
    }


    useEffect(() => {
        dispatch(UserAction());
        dispatch(userDetailsById(1));
    }, [])
    return (
        <LayoutComponent>
            <AddUser type="button" onClick={AddUsers}>{GlobalConent.HomePage.ADD_USER}</AddUser>
            <TableStyle>
                <thead>
                    <tr>
                        <th>{GlobalConent.HomePage.ID}</th>
                        <th>{GlobalConent.HomePage.NAME}</th>
                        <th>{GlobalConent.HomePage.EMAIL}</th>
                        <th>{GlobalConent.HomePage.ROLE}</th>
                        <th>{GlobalConent.HomePage.AVATAR}</th>

                    </tr>
                </thead>
                <tbody>
                    {userList?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <img onClick={() => updateForm(item)} src={EditIcon} width="20px" />
                                <img src={DeleteIcon} width="20px" />
                                <img src={EyeIcon} width="20px" />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </TableStyle>

            {addUsers && (
                <UsersPopUp>
                    <h2>Create user</h2>
                    <Userform>
                        <input type="text" id="name" name="name" placeholder='Enter your name' onChange={nameChange} />
                        <input type="email" id="email" name="email" placeholder='Enter your email' onChange={emailChange} />
                        <input type="password" id="password" name="password" placeholder='Enter your password' onChange={passwordChange} />
                        <input type="url" id="avatar" name="avatar" placeholder='Enter image url' onChange={avatarChange} />
                        <div>
                            <FormBtn type="button" onClick={sendUserCreateData}>{GlobalConent.ButtonContent.CREATE}</FormBtn>
                            <FormBtn type="button" onClick={CloseUserForm}>{GlobalConent.ButtonContent.BUTTON}</FormBtn>
                        </div>
                    </Userform>

                </UsersPopUp>
            )}

            {updatePopUp && (
                <UpdateDiv>
                    <h3>{GlobalConent.HomePage.UPDATE_USER}</h3>
                    <UpdateForm>
                        <input type="email" id="email" name="email" value={editEmail} onChange={updateEmail} />
                        <input type="text" id="name" name="name" value={editName} onChange={updateName} />
                        <div>
                            <FormBtn type="button" onClick={updateUserForm}>{GlobalConent.ButtonContent.UPDATE}</FormBtn>
                            <FormBtn type="button" onClick={closeUpdateForm}>{GlobalConent.ButtonContent.BUTTON}</FormBtn>
                        </div>
                    </UpdateForm>
                </UpdateDiv>
            )}

        </LayoutComponent>
    )
}



export default HomePage;