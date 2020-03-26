import styled from 'styled-components';

export const FeedContainer = styled.section`
    background-color:rgb(245,245,245);
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;
    overflow: scroll;
    box-shadow: inset 0px 15px 10px -0px rgb(238,238,238);
`;

export const SearchContainer = styled.section`
    height:70px;
    width:100%;
    border-bottom: solid 1px rgb(230,230,230);
    display:flex;
    justify-content:center;
    margin-top:0;
`;

export const SearchSubContainer  = styled.section`
    width:80%;
    display:flex;
    justify-content: space-between;
`;

export const SearchSubSubContainer  = styled.section`
    width:25%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-right:5px;
    padding-left:5px;
`;

export const SearchText = styled.span`
    color: rgb(100,100,100);
    display:flex;
    align-items:center;
    height:100%;
    :hover {
        cursor:pointer;
        border-bottom: solid 2px black;
        color:black;
    }
`;

export const SearchTextActive = styled.span`
    color: black;
    border-bottom: solid 2px black;
    display:flex;
    align-items:center;
    height:100%;
`;

export const PostsContainer = styled.section`
    height: 100%;
    width:80%;
    display:flex;
    flex-flow: wrap;
    align-items:flex-start;
    justify-content:space-between;
    margin-top:40px;
`;

export const OwnPostContainer = styled.section`
    width: 48%;
    background-color:white;
    font-size: 15px;
    padding: 30px;
    margin-bottom:30px;
    align-items:center;
    box-shadow: 1px 1px 10px rgb(220,220,220);
    border-radius:4px;
    display: flex;
    justify-content:space-between;
`;

export const PostContainer = styled.section`
    width: 48%;
    background-color:white;
    font-size: 15px;
    padding: 30px;
    margin-bottom:30px;
    box-shadow: 1px 1px 10px rgb(220,220,220);
    border-radius:4px;
    display: flex;
    flex-direction:column;
`;

export const PostText = styled.section`
    font-size: 15px;
    color: rgb(10,10,10);
`;

export const LikesContainer = styled.section`
    :hover {
        cursor:pointer
    }
    `;

export const Avatar = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center; 
    :hover {
        cursor:pointer
    }
    `;
