import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { FeedContainer } from '../../styles/containers'
import { PostsContainer } from '../../styles/containers'
import Post from './Post'



const FollowingPosts = (props) => {

    useEffect( () => {
        props.dispatch(listPostsFunction());
    }, [] )
    
    return <div style={{height:'160vh'}}>
        <NavBar history={props.history}/>
        <FeedContainer>
          <SearchBar history={props.history}/>
            <PostsContainer>
                {
                    props.react_posts.filter( post => post.user.logged_in_user_is_following ).map( (post,index) => {
                      return <Post key={index} history={props.history} user={post.user} avatar={null} text={post.content} post_id={post.id} liked_post={post.logged_in_user_liked} imgs={post.images} amount_of_likes={post.amount_of_likes} created={post.created} dispatch={props.dispatch} />
                    }) 
                }
            </PostsContainer>
        </FeedContainer>
        </div>
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
      react_following: state.following
    };
  };


export default connect(mapStateToProps)(FollowingPosts);
