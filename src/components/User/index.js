import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { FollowButton, FollowButtonActive } from '../../styles/sign_in_up'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { fetchUserFunction } from "../../store/actions/fetchUserAction";
import { fetchPostFunction } from "../../store/actions/fetchPostAction";
import { Ul,Li } from '../../styles/dropdown'
import NavBar from '../Feed/NavBar'
import { PostContainer,LikesContainer  } from '../../styles/containers'
import { fetchUserPostsFunction } from "../../store/actions/fetchUserPostsAction";
import { HOST_URL } from "../../constants.js"
import Post from '../Feed/Post'




const User = (props) => {

  const user_id = props.history.location.pathname.split('/')[2]

  useEffect( () => {
    props.dispatch(fetchUserFunction(user_id));
    props.dispatch(fetchUserPostsFunction(user_id));
  }, [] )

  const fetchPostsHandler = () => {
    console.log('fetching posts')
    props.dispatch(fetchUserPostsFunction(user_id))
    }

  const followUserHandler = (e) => {

    const URL = `${HOST_URL}backend/api/social/toggle-follow/${user_id}/`;
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });
    const config = { method: 'POST',headers};
    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(res => {
          props.dispatch(fetchUserFunction(user_id))
        });
    }
  
    const friendRequestHandler = (e) => {

      const URL = `${HOST_URL}backend/api/social/friends/request/${props.react_user.id}/`;
      const headers = new Headers({
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.token
      });
      const config = { method: 'POST',headers};
      const apiInformation = fetch(URL, config)
          .then(res => res.json())
          .then(res => {
            props.dispatch(fetchUserFunction(props.react_user.id))
          });
      }

    return <>
        <NavBar history={props.history}/>
        <div style={{height:'150vh',display:'flex',flexDirection:'column',alignItems:'center',backgroundImage:"url('https://beinglol.com/media/facebook-cover/Live-Laugh-Love-facebook-covers-2413.jpeg'),linear-gradient(0deg, rgb(240,240,240) 0%, rgb(245,245,245))",backgroundRepeat: 'no-repeat',backgroundSize:'100vw'}} >
          {/* <img src='https://beinglol.com/media/facebook-cover/Live-Laugh-Love-facebook-covers-2413.jpeg' width='100%'/> */}
          <div style={{marginTop:'15%',width:'80%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'space-evenly',height:'100vh'}}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'space-evenly'}}>
            <div style={{backgroundColor:'rgba(255,255,255,0.93)',marginBottom:'20px',display:'grid',gridTemplateColumns:'1.5fr 3fr',borderRadius:'4px',boxShadow:'1px 1px 10px rgb(220,220,220)'}}>
              <div style={{padding:'20px',gridColumn:'1 / span(1)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRight:'solid 0.5px rgb(200,200,200)'}}>
                  { props.react_user.avatar===null ? <div style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'100px',backgroundColor:'lightgrey',color:'white',height:'80px',width:'80px',fontSize:'40px'}}>{ props.react_user.first_name[0] }</div>  : <img src={props.react_user.avatar} height='200px' /> }
                  <h1 style={{fontSize:'30px',paddingTop:'20px'}}>{`${props.react_user.first_name} ${props.react_user.last_name}` }</h1>
                  { props.react_user.location ? <p style={{paddingTop:'8px',fontSize:'20px'}}>{props.react_user.location}</p> : undefined }
                <div style={{height:'120px',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',width:'100%',paddingTop:'20px'}}>
                  { props.react_user.logged_in_user_is_following ? <FollowButtonActive onClick={followUserHandler} style={{width:'150px'}}>FOLLOWING</FollowButtonActive> : <FollowButton onClick={followUserHandler} style={{width:'150px'}}>FOLLOW</FollowButton> }
                  <FollowButton onClick={friendRequestHandler} style={{width:'150px'}}>{ props.react_user.logged_in_user_sent_fr ? <FontAwesomeIcon icon={faCheck} color='grey' style={{fontSize:'15px',marginRight:'10px'}}/> : undefined } ADD FRIEND</FollowButton>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateRows:'1.5fr 1fr',gridColumn:'2 / span(1)'}}>
                <div style={{gridRow:'1 / span(1)', display:'grid',gridTemplateColumns:'1fr 1fr',borderBottom:'solid 0.5px rgb(200,200,200)',padding:'40px'}}>
                  <div style={{gridColumn:'1 / span(1)'}}>
                    <h1>About:</h1><br/>
                    <p>{props.react_user.about_me}</p>
                  </div>
                  <div style={{gridColumn:'2 / span(2)'}}>
                    <h1 style={{marginLeft:'30px'}}>Things I like:</h1><br/>
                    {/* {console.log('U!!',props.react_user.things_user_likes.length)} */}
                    { props.react_user.things_user_likes ? <Ul style={{display:'flex',justifyContent:'center',flexDirection:'row',flexWrap:'wrap',padding:'0',paddingBottom:'15px',paddingTop:'15px'}}>{ props.react_user.things_user_likes.map( thing => <Li style={{padding:'8px',paddingLeft:'13px',paddingRight:'13px',margin:'10px',backgroundColor:'rgb(240,240,240)',borderRadius:'30px'}}>{thing}</Li> ) }</Ul> : undefined }
                  </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',gridRow:'2 / span(1)'}}>
                  <div onClick={fetchPostsHandler} style={{display:'flex',flexDirection:'column'}}>
                    <h1 style={{fontSize:'25px'}}>{props.react_user.amount_of_posts}</h1>
                    <h1 style={{fontSize:'16px',color:'rgb(100,100,100)'}}>Posts</h1>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    {console.log('L!',props.react_user.amount_of_likes)}
                    <h1 style={{fontSize:'25px'}}>{props.react_user.amount_of_likes}</h1>
                    <h1 style={{fontSize:'16px',color:'rgb(100,100,100)'}}>Likes</h1>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <h1 style={{fontSize:'25px'}}>{props.react_user.amount_of_friends}</h1>
                    <h1 style={{fontSize:'16px',color:'rgb(100,100,100)'}}>Friends</h1>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <h1 style={{fontSize:'25px'}}>{props.react_user.amount_of_followers}</h1>
                    <h1 style={{fontSize:'16px',color:'rgb(100,100,100)'}}>Followers</h1>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <h1 style={{fontSize:'25px'}}>{props.react_user.amount_following}</h1>
                    <h1 style={{fontSize:'16px',color:'rgb(100,100,100)'}}>Following</h1>
                  </div>
                </div>
              </div>
          </div>
          {
                    props.react_user.posts.map( (post,index) => {
                        return <Post key={index} history={props.history} user={post.user} avatar={null} text={post.content} post_id={post.id} liked_post={post.logged_in_user_liked} imgs={post.images} amount_of_likes={post.amount_of_likes} created={post.created} dispatch={props.dispatch} />
                        }) 
          }
          </div>
          </div>
          </div>
          </>
}

/* 
  Redux 
*/
const mapStateToProps = state => {
    return {
      react_user: state.user,
    };
  };

export default connect(mapStateToProps)(User);
