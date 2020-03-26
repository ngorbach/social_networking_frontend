import React from 'react';
import styled from 'styled-components'
import { BaseButton } from '../../styles/buttons'
import { Link } from 'react-router-dom';
import { SignupContainer } from '../../styles/sign_in_up'
import { SignupText } from '../../styles/sign_in_up'
import { SignupButton } from '../../styles/sign_in_up'


const SignTopWrapper = styled.div`
    margin-top: 5vh;
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
`;


const Span = styled.span`
    font-size: 14px;
    margin-right: 14px;
`;

const SignTop = (props) => {

    return <SignupContainer>
        <SignupText>{props.questionText}</SignupText>
        <Link to={props.path}>
            <SignupButton>{props.buttonText}</SignupButton>
        </Link>
    </SignupContainer>
}

export default SignTop

