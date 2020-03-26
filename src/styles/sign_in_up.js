import styled from 'styled-components';
import Link from 'styled-components';
import { BaseButton} from './buttons'

export const LoginLayout = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    `;

export const LeftPanel = styled.div`
    height:100%;
    width:40%;
    display:flex;
    flex-direction: column;
    align-items: center;
    /* background-color:lightgrey; */
    background-image: url('./assets/images/background_image.png'), linear-gradient(102deg, #c468ff 0%, #6e91f6);
    background-repeat: no-repeat;
    background-size: cover;
    `;

export const LoginRight = styled.div`
    height:100%;
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    `;

export const SignUpTop = styled.div`
    margin-top: 5vh;
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `;

export const SignInButton = styled(BaseButton)`
    width:25%;
    height:6%;
    margin-top:20%;
    font-size:13px;
    background-color:purple;
    color:white;
`;

export const LogoContainer = styled.div`
    height: 80px;
    min-height: 60px;
    width: 80px;
    min-width: 60px;
    margin-top: 31.875vh;
`;

export const LeftTitle = styled.div`
    font-size: 3.75vh;
    letter-spacing: 0.125%;
    color: white;
    margin-top: 1.875vh;
    text-align: center;
`;

export const LeftSubtitle = styled.div`
    color: white;
    width: 45.7%;
    opacity: 0.6;
    margin-top: 3.125vh;
    line-height: 1.5;
    text-align: center;
`;

export const AppStoreContainer = styled.div`
    width: 41.67%;
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
    `;

export const AppStoreBox = styled.div`
    width: 47.01%;
    height: 5.25vh;
    border: solid 2px rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    border-radius:30px;
    `;

export const SocialMediaContainer = styled.div`
    margin-top: 15.75vh;
    width: 25.33%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    `;

export const SocialMediaIcon = styled.div`
        background-color: grey;
        color: black;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 15px;
        mix-blend-mode: screen;
        display: flex;
        justify-content: center;
        align-items: center;
        `;

export const LicenseStatement = styled.div`
    margin-top: 5.25vh;
    font-size: 1.5vh;
    color: white; 
    `;

export const RightPanel = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    `;

export const SignupContainer = styled.div`
    margin-top: 5vh;
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    `;

export const SignupText = styled.div`
    font-size: 14px;
    margin-right: 14px;
    `;

export const SignupButton = styled.button`
    height: 100%;
    width: 115px;
    margin-right: 30px;;
    font-size: 10px;
    border-radius:30px;
    padding:13px;
    :hover {
        cursor: pointer;
    }
    `;

export const SigninContainer = styled.div`
    margin-top: 141px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: column-wrap;
    border:lightgrey;
    `;

export const SigninText = styled.div`
    font-size: 40px; 
    `; 

export const UsrInput = styled.div`
    margin-top: 15px; 
    `;

export const PwdInput = styled.div`
    margin-top: 57.5px; 
    `;

export const SigninButton = styled.div`
    margin-top: 167px;
    height: 60px;
    width: 260px;
    box-shadow: 0 10px 30px 0 var(--black-7);
    background-image: linear-gradient(102deg, #c468ff 0%, #6e91f6);
    border: none;
    letter-spacing: 1px;
    font-size: 12px;
    color: white; 
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover {
        cursor: pointer;
    }
    `;


export const FollowButton = styled.button`
    font-size: 12px;
    height:40px;
    width:45%;
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover {
    cursor: pointer
    }
    `;

export const FollowButtonActive = styled.button`
    background-image: linear-gradient(102deg, #c468ff 0%, #6e91f6);
    border:none;
    font-size: 12px;
    color:white;
    height:40px;
    width:45%;
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover {
    cursor: pointer
    }
    `;

