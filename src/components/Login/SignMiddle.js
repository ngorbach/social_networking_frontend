import React from 'react';
import { SigninText, UsrInput } from '../../styles/sign_in_up'
import 'font-awesome/css/font-awesome.min.css'

const SignMiddle = (props) => {
    return <>
    <SigninText>{props.title}</SigninText>
        { props.inputs.map( input => <UsrInput placeholder='&#xf2bd;       Username'>{input}</UsrInput> )}
    </>
}

export default SignMiddle
