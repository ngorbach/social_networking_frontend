import React, {useState} from 'react';
import {connect} from 'react-redux';
import SignTop from './SignTop.js'
import SignMiddle from './SignMiddle.js'
import { LoginLayout, RightPanel } from '../../styles/sign_in_up'
import { BaseInput } from '../../styles/inputs'
import { loginFunction } from "../../store/actions/loginAction";
import { SigninButton, SigninContainer } from '../../styles/sign_in_up'
import LeftPanelComponent from './LeftPanelComponent'


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLoginHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        props.dispatch(loginFunction(data))
    };


    return <LoginLayout>
        <LeftPanelComponent />
        <RightPanel>
            <SignTop questionText={"Don't have an account?"} buttonText="SIGN UP" path="/signup/" />
            <SigninContainer>
                <SignMiddle title={"Sign In"} inputs={[<BaseInput placeholder='&#xf2bd;       Username' onChange={(e) => setEmail(e.currentTarget.value)}/>,<BaseInput type='password' placeholder='&#xf023;       Password' onChange={(e) => setPassword(e.currentTarget.value)}/>]}/>
                <SigninButton onClick={userLoginHandler}>SIGN IN</SigninButton>
            </SigninContainer>
        </RightPanel>
    </LoginLayout>
}

export default connect()(Login);
