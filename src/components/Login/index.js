import React, {useState} from 'react';
import {connect} from 'react-redux';
import SignTop from './SignTop.js'
import SignMiddle from './SignMiddle.js'
import { LoginLayout, RightPanel, SigninButton, SigninContainer } from '../../styles/sign_in_up'
import { BaseInput } from '../../styles/inputs'
import { loginFunction } from "../../store/actions/loginAction";
import LeftPanelComponent from './LeftPanelComponent'


const Login = (props) => {

    const [email, setEmail] = useState('nico@email.com');
    const [password, setPassword] = useState('propulsion');
    
    const userLoginHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        console.log('in da login handler',data)
        props.dispatch(loginFunction(data))
    };

    return <LoginLayout>
        <LeftPanelComponent />
        <RightPanel>
            <SignTop questionText={"Don't have an account?"} buttonText="SIGN UP" path="/signup/" />
            <SigninContainer>
                <form>
                <SignMiddle title={"Sign In"} inputs={[<BaseInput placeholder='&#xf2bd;       Username' onChange={(e) => setEmail(e.currentTarget.value)} value='nico@email.com'/>,<BaseInput type='password' placeholder='&#xf023;       Password' onChange={(e) => setPassword(e.currentTarget.value)}/>]} value='propulsion'/>
                {/* <SigninButton type="submit" onClick={userLoginHandler}>SIGN IN</SigninButton> */}
                <SigninButton type="submit" onClick={userLoginHandler} value="SIGN IN"/>
                </form>
            </SigninContainer>
        </RightPanel>
    </LoginLayout>
}

export default connect()(Login);
