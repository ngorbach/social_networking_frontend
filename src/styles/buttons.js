import styled from 'styled-components';

export const BaseButton = styled.button`
    width: 120px;
    height: 30px;
    background: none;
    border-radius: 30px;
    :hover {
        cursor: pointer
    }
    font-size: 15px;
    color: rgb(100,100,100);
`;

export const Button = styled.button`
font-size:20px;
border-radius:30px;
padding-left:5px;
padding-right:5px;
font-size: 15px;
color: rgb(100,100,100);
margin:2px;
border:none;
background-color:Transparent;
:hover {
    cursor: pointer
}
`;

export const SendButton = styled.button`
    height:60px;
    width:60px;
    background-image: linear-gradient(102deg, #c468ff 0%, #6e91f6);
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover {
    cursor: pointer
}
    `;

