import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar'
import { SendButton } from "../../styles/buttons"
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { FeedContainer, PostsContainer, OwnPostContainer } from '../../styles/containers'
import SearchBar from './SearchBar'
import { HOST_URL } from "../../constants.js"
import Post from './Post'




const Feed = (props) => {

    useEffect( () => {
        props.dispatch(listPostsFunction());
    }, [] )

    const [post, setPost] = useState('');
    const [selfPost, setSelfPost] = useState('');




    const makePostHandler = () => {
        const URL = `${HOST_URL}backend/api/social/posts/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = { method:'POST',body: JSON.stringify({content:post,title:'title'}),headers};
        const apiInformation = fetch(URL, config)
            .then( response  => response.json())
            .then( result  => {
            console.log('Success:', result);
            props.dispatch(listPostsFunction());
            props.react_posts.push(result)
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
            {/* { props.react_posts.map( post => console.log('AVATAR',post) ) } */}
                {
                    props.react_posts.map( (post,index) => {
                        return <Post key={index} history={props.history} user={post.user} avatar={null} text={post.content} post_id={post.id} liked_post={post.logged_in_user_liked} imgs={post.images} amount_of_likes={post.amount_of_likes} created={post.created} dispatch={props.dispatch} />
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