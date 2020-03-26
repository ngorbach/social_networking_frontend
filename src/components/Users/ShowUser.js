import React from 'react';
import {connect} from 'react-redux';
import { Button } from "../../styles/buttons"
import { PostText } from '../../styles/containers'
import { PostContainer } from '../../styles/containers'
import { Ul,Li } from '../../styles/dropdown'
import { FollowButton, FollowButtonActive } from '../../styles/sign_in_up'
import { fetchUserFunction } from "../../store/actions/fetchUserAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from '../../styles/containers'
import { HOST_URL } from "../../constants.js"


const ShowUser = (props) => {
  const showUserHandler = (e) => {
    e.preventDefault();
    props.history.push(`/user/${props.user.id}`)
  }

  const followUserHandler = (e) => {

    const URL = `${HOST_URL}backend/api/social/toggle-follow/${props.user.id}/`;
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });
    const config = { method: 'POST',headers};
    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(res => {
          props.dispatch(fetchUserFunction(props.user.id))
        });
    }
  
    const friendRequestHandler = (e) => {

      const URL = `${HOST_URL}backend/api/social/friends/request/${props.user.id}/`;
      const headers = new Headers({
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.token
      });
      const config = { method: 'POST',headers};
      const apiInformation = fetch(URL, config)
          .then(res => res.json())
          .then(res => {
            props.dispatch(fetchUserFunction(props.user.id))
          });
      }

  return <PostContainer style={{width:'300px',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',paddingBottom:'15px',paddingTop:'15px'}}>
              <Avatar onClick={ showUserHandler} >
              {props.user.avatar===null ? <div style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'100px',backgroundColor:'lightgrey',color:'white',height:'80px',width:'80px',fontSize:'40px',marginBottom:'10px',marginTop:'15px'}}>{ props.user.first_name[0] }</div>  : <img src={props.user.avatar} height='130px' style={{paddingBottom:'8px',paddingTop:'8px'}}/> }
              {/* <img src='../assets/svgs/avatar.svg' height='38px' style={{marginRight:'20px'}} /> */}
              <p style={{paddingBottom:'8px',paddingTop:'8px'}}>{`${props.user.first_name} ${props.user.last_name}` }</p>
              </Avatar>
              { props.user.location ? <p style={{paddingTop:'8px'}}>{props.user.location}</p> : undefined }
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%',paddingBottom:'15px',paddingTop:'15px'}}>
              { props.user.logged_in_user_is_following ? <FollowButtonActive onClick={followUserHandler}>FOLLOWING</FollowButtonActive> : <FollowButton onClick={followUserHandler} style={{width:'45%'}}>FOLLOW</FollowButton> }
              <FollowButton onClick={friendRequestHandler}>{ props.user.logged_in_user_sent_fr ? <FontAwesomeIcon icon={faCheck} color='grey' style={{fontSize:'15px',marginRight:'5px'}}/> : undefined } ADD FRIEND</FollowButton>
            </div>
            { props.user.about_me ? <p style={{paddingBottom:'15px',paddingTop:'15px',textAlign:'justify',overflow:'hidden',textOverflow:'ellipsis'}}>{props.user.about_me}</p> : undefined }
            {/* { props.user.things_user_likes.length>0 ? <Ul style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',padding:'0',paddingBottom:'15px',paddingTop:'15px'}}>{ props.user.things_user_likes.map( thing => <Li style={{padding:'8px',paddingLeft:'13px',paddingRight:'13px',margin:'10px',backgroundColor:'rgb(240,240,240)',borderRadius:'30px'}}>{thing}</Li> ) }</Ul> : undefined } */}
            { props.user.things_user_likes!==null ? <Ul style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',padding:'0',paddingBottom:'15px',paddingTop:'15px'}}>{ props.user.things_user_likes.map( thing => <Li style={{padding:'8px',paddingLeft:'13px',paddingRight:'13px',margin:'10px',backgroundColor:'rgb(240,240,240)',borderRadius:'30px'}}>{thing}</Li> ) }</Ul> : undefined }
            {/* <PostText>{`Number of followers: ${props.user.amount_of_followers}`}</PostText>
            <PostText>{`Number of likes: ${props.user.amount_of_likes}`}</PostText>
            <PostText>{`Number of posts: ${props.user.amount_of_posts}`}</PostText> */}
        </PostContainer>
}

export default connect()(ShowUser);
