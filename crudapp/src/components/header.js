import React, { useState } from 'react';
import LogoIcon from "../images/teamwork.png";
import { GlobalConent } from '../constants/globalcontent';
import { HeaderContainer, HeaderUlContent, PopUpData } from './header.style';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
    const [profile, setProfile] = useState(false);

    const userDataById = useSelector(state => state.allUsers.getUserDataById);

    const profileRender = () => {
        setProfile(true)
    }

    const closePopUpData = () => {
        setProfile(false);
    }
    return (
        <>
            <HeaderContainer>
                <div>
                    <img src={LogoIcon} width="85px" />
                </div>
                <HeaderUlContent>
                    <li>{GlobalConent.UserContent.HOME}</li>
                    <li onClick={profileRender}>{GlobalConent.UserContent.PROFILE}
                        <img src={userDataById.avatar} width="20px" />
                    </li>

                </HeaderUlContent>
            </HeaderContainer>

            {profile && (
                <>
                    <PopUpData>

                        <img src={userDataById.avatar} width="80px" />
                        <h3>{userDataById.name}</h3>
                        <p>{userDataById.email}</p>
                        <p>{userDataById.role}</p>
                        <button type="button" onClick={closePopUpData}>{GlobalConent.ButtonContent.BUTTON}</button>

                    </PopUpData>
                </>
            )}


        </>

    )
}


export default HeaderComponent;