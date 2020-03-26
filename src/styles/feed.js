import styled from 'styled-components';

export const FeedContainer = styled.section`
    background-color:rgb(250,250,250);
    width:100%;
    display:flex;
    justify-content: center;
    padding: 40px;
    overflow: scroll;
`;


export const PostsContainer = styled.section`
    height: 100%;
    width:90%;
    display:flex;
    flex-flow: wrap;
    align-items:center;
    justify-content:space-evenly;
`;

export const PostContainer = styled.section`
    width: 40%;
    background-color:white;
    font-size: 15px;
    padding: 20px;
    margin:5px;
    `;

export const PostText = styled.section`
    font-size: 15px;
    color: rgb(100,100,100);
    `;


export const NavBarFeed = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    padding-left:30px;
    padding-right:30px;
    padding-top:20px;
    width:100%;
    `;

export const NavBarLeft = styled.div`
    width:50%;
    display: table;
    `;

export const NavBarLogo = styled.div`
    display:table-cell;
    justify-content:'space-between';
    align-items:center;
    color:rgb(100,100,100);
    :hover {
        cursor:pointer;
        border-bottom: solid 2px rgb(196,104,255);
        color:black;
    }
    padding-bottom:30px;
    margin-right:5px;
    `;

export const NavBarSubLogo = styled.div`
    display:flex;
    align-items:center;
    `; 

export const NavBarRight = styled.div`
    display:flex;
    justify-content:space-between;
    /* align-items:center; */
    width:16%;
    padding-bottom:15px;
    margin-right:10px;
    `;