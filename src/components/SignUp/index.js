import React, {useState} from 'react';
import {connect} from 'react-redux';
import SignTop from '../Login/SignTop.js'
import SignMiddle from '../Login/SignMiddle.js'
import { LoginLayout,RightPanel,SigninButton,SigninContainer } from '../../styles/sign_in_up'
import { BaseInput } from '../../styles/inputs'
import { registerUserFunction } from "../../store/actions/registerUserAction";
import LeftPanelComponent from '../LeftPanel/LeftPanelComponent'


const SignUp = (props) => {

    const [email, setEmail] = useState('');

    const registerUserHandler = (e) => {
        e.preventDefault();

        props.dispatch(registerUserFunction({email}))
        props.history.push('/signup_notification/')
    }

    return <LoginLayout>
        <LeftPanelComponent/>
        <RightPanel>
            <SignTop questionText={"Already have an account?"} buttonText="SIGN IN" path="/" />
            <SigninContainer>
              <SignMiddle title={"Sign Up"} inputs={[<BaseInput placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)}/>]}/>
              <SigninButton  onClick={registerUserHandler}>CONTINUE</SigninButton>
            </SigninContainer>
        </RightPanel>
    </LoginLayout>
}

/* 
  Redux 
*/

export default connect()(SignUp);
