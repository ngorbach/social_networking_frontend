import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar'
import LikePost from './LikePost'
import ChangePost from './ChangePost'
import DeletePost from './DeletePost'
import { Button, SendButton } from "../../styles/buttons"
import { BaseInput } from '../../styles/inputs'
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { listFollowingFunction } from "../../store/actions/listFollowingAction";
import { listUsersFunction } from "../../store/actions/listUsersAction";
import { listLikesFunction } from "../../store/actions/listLikesAction";
import { fetchPostFunction } from "../../store/actions/fetchPostAction";
import { retrieveLoggedUserInfoFunction } from "../../store/actions/retrieveLoggedUserInfoAction";
import { FeedContainer, PostsContainer, PostContainer,OwnPostContainer, LikesContainer, PostText } from '../../styles/containers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserFriends, faBell, faUserCircle, faEllipsisV, faPowerOff, faSearch, faThumbsUp, faLessThanEqual} from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import { Ul,Li,Dropdown,DropdownContent } from '../../styles/dropdown'


const PostDropDown = props => {

    const changePostHandler = (e) => {
        e.preventDefault();
        const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/${props.post_id}/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = {
            method: 'PUT',
            body: JSON.stringify({content:'changed post'}),
            headers
        };
        const apiInformation = fetch(URL, config)
            .then((response) => response.text())
            .then((result) => {
            console.log('Success:', result);
            props.dispatch(fetchPostFunction(props.post_id))
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }

    const deletePostHandler = (e) => {
        console.log('delete')
        e.preventDefault();
        const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/${props.post_id}/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = {
            method: 'DELETE',
            headers
        };
        const apiInformation = fetch(URL, config)
            .then((response) => response.text())
            .then((result) => {
            console.log('Success:', result);
            props.dispatch(fetchPostFunction(props.post_id))
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }

  return (
    <Dropdown>
      <div
        style={{
          height: "100%",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{padding:'10px'}}><img src="../assets/svgs/menu.svg" /></div>
      </div>
      <DropdownContent>
        <Ul>
            <ChangePost post_id={props.post_id}/>
            <DeletePost post_id={props.post_id}/>
        </Ul>
      </DropdownContent>
    </Dropdown>
  );
};


const Post = (props) => {

    const likePostHandler = (e) => {
        e.preventDefault();
        const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${props.post_id}/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = {
            method: 'POST',
            body: JSON.stringify({content:'like'}),
            headers
        };
        const apiInformation = fetch(URL, config)
            .then(res => res.json())
            .then(user => {
                // props.dispatch(listPostsFunction());
                props.dispatch(fetchPostFunction(props.post_id));
        });
    }

    const date1 = new Date(Date.now())
    const date2 = new Date(props.created)
    let dateDiff = new Date(date1-date2)
    dateDiff = Math.floor((dateDiff/1000)/60)
    if (dateDiff < 1) {
        dateDiff = 'just now'
    } else if (dateDiff < 60) {
        dateDiff = `${dateDiff} minutes ago`
    } else if (dateDiff > 60 && dateDiff < 60 * 24) {
        dateDiff = `${Math.floor(dateDiff/60)} hours ago`
    } else if(dateDiff > 60 * 24) {
        dateDiff = `${Math.floor(dateDiff/(60*24))} days ago`
    } 

    return <PostContainer>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center'}}>
                {/* {props.avatar===null ? <img src='../assets/svgs/avatar.svg' height='38px' style={{marginRight:'20px'}}/> : <img src={props.avatar} width='10%' style={{marginRight:'20px'}}/> } */}
                {/* {props.avatar===null ? <FontAwesomeIcon icon={faUserCircle} color='lightgrey' style={{fontSize:'38px',marginRight:'20px'}}/> : <img src={props.avatar} width='10%' style={{marginRight:'20px'}}/> } */}
                {props.avatar===null ?<div style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'30px',backgroundColor:'lightgrey',color:'white',height:'50px',width:'50px',fontSize:'30px',marginRight:'20px'}}>{props.name[0]}</div> : <img src={props.avatar} width='10%' style={{marginRight:'20px'}}/> }
                <Ul style={{height:'40px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <Li style={{margin:'0',padding:'0'}}>{props.name}</Li>
                    <Li style={{margin:'0',padding:'0',color:'rgb(100,100,100)'}}>{dateDiff}</Li>
                </Ul>
            </div>
            { props.ownPost ? undefined : <PostDropDown post_id={props.post_id} dispatch={props.dispatch}/>}
        </div>
        <p style={{paddingBottom:'20px',paddingTop:'20px',textAlign:'justify',overflow:'hidden',textOverflow:'ellipsis'}}>{props.text}</p>
        { props.imgs.map( img => <img src={img.image} alt='Image could not be displayed' width='10%'/>) }<br/>
        <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
            <div style={{width:'50%',display:'flex',justifyContent:'space-between'}}>
                <LikesContainer onClick={likePostHandler} style={{width:'60px',display:'flex',justifyContent:'space-between'}}>
                    { props.liked_post ? <img src='../assets/svgs/heart_liked.svg' /> : <img src='../assets/svgs/heart.svg' />}
                    <span>Like</span>
                </LikesContainer>
                <div style={{width:'70px',display:'flex',justifyContent:'space-between'}}>
                    <img src='../assets/svgs/share.svg' />
                    <span>Share</span>
                </div>
            </div>
            <span style={{color:'rgb(100,100,100)'}}>{`${props.amount_of_likes} likes`}</span>
        </div>
        </PostContainer>
}



const Feed = (props) => {

    useEffect( () => {
        props.dispatch(listPostsFunction());
    }, [] )

    const [post, setPost] = useState('');
    const [selfPost, setSelfPost] = useState('');
    const [ownUserId, setOwnUserId] = useState(null);


    const makePostHandler = () => {
        const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = { method:'POST',body: JSON.stringify({content:post}),headers};
        const apiInformation = fetch(URL, config)
            .then( response  => response.json())
            .then( result  => {
            console.log('Success:', result);
            props.dispatch(fetchPostFunction(result.id));
            props.dispatch(listPostsFunction());
            })
            .catch((error) => {
            console.error('Error:', error);
            });

        setSelfPost(post)
        setPost('')
    };


    return <>
        <NavBar history={props.history}/>
        <FeedContainer>
        <SearchBar history={props.history}/>
            <PostsContainer>
            <OwnPostContainer>
            <img src='../assets/images/users/jennifer.png' height='50px' /><input value={post} type='text' placeholder={`What's on your mind${props.react_loggedUserInfo === undefined ? '' : `, ${props.react_loggedUserInfo.first_name}`}?`} style={{border:'none',width:'65%',paddingLeft:'20px'}} onChange={ (e) => setPost(e.currentTarget.value) } /><SendButton onClick={makePostHandler}><img src='../assets/images/send_button.png' height='20px'/></SendButton>
            </OwnPostContainer>
                {
                    props.react_posts.map( (post,index) => {
                        return <Post key={index} avatar={post.user.avatar} text={post.content} name={ `${post.user.first_name} ${post.user.last_name}` } post_id={post.id} liked_post={post.logged_in_user_liked} imgs={post.images} amount_of_likes={post.amount_of_likes} created={post.created} dispatch={props.dispatch} ownPost={post.user.logged_in_user_is_following}/>
                        }) 
                }
            </PostsContainer>
        </FeedContainer>
        </>
}

/* 
  Redux 
*/
const mapStateToProps = state => {
    return {
      react_user: state.user,
      react_users: state.users,
      react_posts: state.posts,
      react_likes: state.likes,
      react_following: state.following,
      react_loggedUserInfo : state.loggedUserInfo
    };
  };


export default connect(mapStateToProps)(Feed);