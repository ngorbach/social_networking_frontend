import React from 'react';
import {connect} from 'react-redux';
import SignMiddle from '../Login/SignMiddle.js'
import { LoginLayout } from '../../styles/sign_in_up'
import { RightPanel } from '../../styles/sign_in_up'
import LeftPanelComponent from '../LeftPanel/LeftPanelComponent'
import { SigninContainer } from '../../styles/sign_in_up'
import { SigninButton } from '../../styles/sign_in_up'


const SignUpNotification = (props) => {
    
    const continueSignupHandler = () => {
      props.history.push('/signup_validation')
    }

    return <LoginLayout>
        <LeftPanelComponent />
        <RightPanel>
          <SigninContainer>
            <SignMiddle title={props.registration.success ? "Congratulations" : "Ups"} inputs={[<span style={{fontSize:'12px',textAlign:'center'}}>{props.registration.email}</span>]}/>
            {/* <SignInButton>{props.registration.success ? 'CONTINUE' : 'GO BACK'}</SignInButton> */}
            <SigninButton onClick={continueSignupHandler}>CONTINUE</SigninButton>
          </SigninContainer>
        </RightPanel>
    </LoginLayout>
}

const mapStateToProps = state => {
    return {
      registration: state.registration
    };
  };
export default connect(mapStateToProps)(SignUpNotification);