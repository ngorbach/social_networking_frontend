import styled from 'styled-components';

export const BaseInput = styled.input`
    width: 250px;
    height: 30px;
    background: none;
    border: none;
    outline: 0;
    border-bottom: 2px solid lightgrey;
    margin-top:50px;
    padding-bottom: 10px;
    color: rgb(100,100,100);
    ::placeholder {
        font-size: 15px;
        color: rgb(100,100,100);
        margin-bottom:10px;¨
    }
`;