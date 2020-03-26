import React from 'react';
import styled from 'styled-components'
import { BaseButton} from '../../styles/buttons'

const SignTopWrapper = styled.div`
    height:10%;
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    border: solid 1px lightgrey
    `;

const SignupButton = styled(BaseButton)`
    color: ${props => props.main ? props.mainColor : 'blue'};
    font-size: ${props => props.small ? '10px' : '30px'}
`;

const Span = styled.span`
    font-size: ${props => props.small ? '15px' : '30px'};
    `;

const SignTop = () => {
    return <SignTopWrapper>
        <Span small>Don't have an account?</Span>
        <SignupButton small>SIGN UP</SignupButton>
    </SignTopWrapper>
}

export default SignTop