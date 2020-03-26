import styled from 'styled-components'


export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    font-size: 25px;
    display:flex;
    border-radius:5px;
    right:0;
    display: none;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${DropdownContent} {
      display: block;
    }
`;

export const Ul = styled.ul`
    `;

export const Li = styled.ul`
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;
    text-decoration:none;
    :hover {
        background-color:rgba(200,200,200,0.3);
        cursor: pointer;
    }
    `;

export const Menu = styled.ul`
    :hover {
        fill: black;
    }
    `;