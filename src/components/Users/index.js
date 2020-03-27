import React, { useEffect }  from 'react';
import {connect} from 'react-redux';
import NavBar from '../Feed/NavBar';
import ShowUser from './ShowUser'
import { listUsersFunction } from "../../store/actions/listUsersAction";
import { FeedContainer } from '../../styles/containers'
import { PostsContainer } from '../../styles/containers'

const Users = (props) => {
  
    useEffect( () => {
      props.dispatch(listUsersFunction())
    }, [] )

    return <>
    <NavBar history={props.history}/>
    <FeedContainer>
    <PostsContainer>
    {
    props.react_users.map( (user,index) => {
        // return <PostContainer key={index}><ShowUser user={user} history={props.history}/><br/><FollowUser user_id={user.id} following={props.logged_in_user_is_following} /></PostContainer>
        return <>
          {user.first_name ? <ShowUser key={index} user={user} history={props.history} style={{flexDirection:'column',justifyContent:'center'}}/> : '' }
          </>
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
      react_users: state.users,
      react_following: state.following
    };
  };

export default connect(mapStateToProps)(Users);
