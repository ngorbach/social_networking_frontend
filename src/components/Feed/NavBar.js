import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import { Button } from "../../styles/buttons"
import { listUsersFunction } from "../../store/actions/listUsersAction";
import { listFollowingFunction } from "../../store/actions/listFollowingAction";
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { listLikesFunction } from "../../store/actions/listLikesAction";
import { logoutFunction } from "../../store/actions/logoutAction";
import { NavBarFeed, NavBarLeft, NavBarLogo, NavBarSubLogo, NavBarRight } from '../../styles/feed'
import {Dropdown,DropdownContent,Ul,Li } from '../../styles/dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const NavContainer = styled.span`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
background-color: white;
padding: 10px;
`;

const NavLeftContainer = styled.span`
    width:40%;
    display:flex;
    align-items:center;
`;

const NavRightContainer = styled.span`
font-size: 20px;
margin-left:20px;
display:flex;
align-items:center;
`;

const NavBar = (props) => {

    const logoutHandler = () => {
        console.log('in da logout handler')
        props.dispatch(logoutFunction())
        props.history.push('/')
    };

    const listUsersHandler = (e) => {
        e.preventDefault();
        props.dispatch(listUsersFunction())
        console.log('q',props)
        // props.dispatch(listFollowingFunction())
        props.history.push('/users/')
    }

    const listPostsHandler = (e) => {
        e.preventDefault();
        props.dispatch(listPostsFunction());
        props.history.push('/feed/')
    }

    const listLikesHandler = (e) => {
        e.preventDefault();
        props.dispatch(listPostsFunction());
        props.dispatch(listLikesFunction())
        props.history.push('/likes/')
    }

    const deleteAccountHandler = (e) => {
        const URL = `https://motion.propulsion-home.ch/backend/api/users/me/`;
        const headers = new Headers({
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.token
            });
        const config = { method:'DELETE',headers};
        const apiInformation = fetch(URL, config)
            .then((response) => response.text())
            .then((result) => {
            console.log('Success:', result);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

        logoutHandler();
    }

    return <>
            <NavBarFeed>
            <NavBarLeft>
            <NavBarLogo onClick={listPostsHandler}>
            <NavBarSubLogo>
                <img src='../assets/images/favicon.png' alt='Image could not be displayed.' height='25px' style={{marginRight:'15px'}}/>
                <span style={{fontSize:'22px'}}>Motion</span>
            </NavBarSubLogo>
            </NavBarLogo>
            <NavBarLogo>
            <NavBarSubLogo>
                <img src='../assets/images/posts_logo.png' alt='Image could not be displayed.' height='25px' style={{marginRight:'15px'}}/>
                <span style={{fontSize:'20px'}}>Post</span>
            </NavBarSubLogo>
            </NavBarLogo>
            <NavBarLogo onClick={listUsersHandler}>
            <NavBarSubLogo>
                <img src='../assets/svgs/icon-friends.svg' height='25px' style={{marginRight:'15px'}}/>
                <span style={{fontSize:'20px'}}>Find Friends</span>
            </NavBarSubLogo>
            </NavBarLogo>
            </NavBarLeft>
            <NavBarRight>
                <img src='../assets/svgs/notification_bell.svg' style={{paddingLeft:'20px',paddingRight:'20px'}}/>
                <img src='../assets/images/users/jennifer.png' alt='Image could not be displayed.' style={{paddingLeft:'20px',paddingRight:'20px'}}/>
                <Dropdown>
                    <div style={{height:'100%',paddingLeft:'20px',paddingRight:'20px',margin:'0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src='../assets/svgs/menu.svg'/>
                    </div>
                    <DropdownContent>
                        <Ul>
                            <Li><FontAwesomeIcon icon={faUser} height='50px' color='white' style={{backgroundColor:'rgb(200,200,200)',padding:'2.2px',marginRight:'15px'}}/>Profile</Li>
                            <Li onClick={ logoutHandler }><FontAwesomeIcon icon={faSignOutAlt} height='50px' color='lightgrey' style={{marginRight:'15px'}}/>Logout</Li>
                        </Ul>
                    </DropdownContent>
                </Dropdown>
            </NavBarRight>
            </NavBarFeed>
            </>
}

export default connect()(NavBar);