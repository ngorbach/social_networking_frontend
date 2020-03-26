import React, {useState} from 'react';
import SignMiddle from '../Login/SignMiddle.js'
import { LoginLayout } from '../../styles/sign_in_up'
import LeftPanelComponent from '../LeftPanel/LeftPanelComponent'
import { RightPanel } from '../../styles/sign_in_up'
import { BaseInput } from '../../styles/inputs'
import { SigninContainer } from '../../styles/sign_in_up'
import { SigninButton } from '../../styles/sign_in_up'


const SignUpValidation = (props) => {

    const [code, setCode] = useState();
    const [email, setEmail] = useState('nico.gorbach@gmail.com');
    const [username, setUsername] = useState('nico.stephan');
    const [first_name, setFirst_name] = useState('Nico');
    const [last_name, setLast_name] = useState('Stephan');
    const [password, setPassword] = useState('password');
    const [password_repeat, setPassword_repeat] = useState('password');

    const completeSignupHandler = () => {

        const URL = `https://motion.propulsion-home.ch/backend/api/auth/registration/validation/`;
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const data = {
            email,
            username,
            code,
            password,
            password_repeat,
            first_name,
            last_name
        }
        const config = { method:'PATCH',
                        body: JSON.stringify(data),
                        headers};
        const apiInformation = fetch(URL, config)
            .then((response) => response.text())
            .then((result) => {
            console.log('Success:', result);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        props.history.push('/feed/')
    }

    return <LoginLayout>
        <LeftPanelComponent />
        <RightPanel style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1 style={{fontSize:'40px'}}>Verification</h1>
            <SigninContainer style={{marginTop:'20px',height:'50vh',width:'100%',display:'flex',flexWrap:'wrap'}}>
                <SignMiddle inputs={[<BaseInput placeholder='Validation Code' onChange={(e) => setCode(e.currentTarget.value)}/>,<BaseInput placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)}/>,<BaseInput placeholder='Username' onChange={(e) => setUsername(e.currentTarget.value)}/>,<BaseInput placeholder='First Name' onChange={(e) => setFirst_name(e.currentTarget.value)}/>,<BaseInput placeholder='Last Name' onChange={(e) => setLast_name(e.currentTarget.value)}/>,<BaseInput placeholder='Password' onChange={(e) => setPassword(e.currentTarget.value)}/>,<BaseInput placeholder='Password repeat' onChange={(e) => setPassword_repeat(e.currentTarget.value)}/>]}/>
            </SigninContainer>
            <SigninButton onClick={completeSignupHandler}>COMPLETE</SigninButton>
        </RightPanel>
    </LoginLayout>
}

export default SignUpValidation;