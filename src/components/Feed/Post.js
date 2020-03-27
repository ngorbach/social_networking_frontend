import { HOST_URL } from "../../constants.js"
import { fetchPostFunction } from "../../store/actions/fetchPostAction";
import { PostContainer, LikesContainer } from '../../styles/containers';
import React from 'react';
import PostDropDown from './PostDropDown';
import { Ul,Li } from '../../styles/dropdown'
import { Avatar } from '../../styles/containers'


const Post = (props) => {

    const showUserHandler = (e) => {
        e.preventDefault();
        console.log('S',props)
        props.history.push(`/user/${props.user.id}`)
      }

    const likePostHandler = (e) => {
        e.preventDefault();
        const URL = `${HOST_URL}backend/api/social/posts/toggle-like/${props.post_id}/`;
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
                {props.avatar===null ?<div style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'30px',backgroundColor:'lightgrey',color:'white',height:'50px',width:'50px',fontSize:'30px',marginRight:'20px'}}>{props.user.first_name[0]}</div> : <img src={props.avatar} width='10%' style={{marginRight:'20px'}}/> }
                <Ul style={{height:'40px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <Avatar style={{margin:'0',padding:'0'}} onClick={ showUserHandler}>{`${props.user.first_name} ${props.user.last_name}`}</Avatar>
                    <Li style={{margin:'0',padding:'0',color:'rgb(100,100,100)'}}>{dateDiff}</Li>
                </Ul>
            </div>
            { props.user.ownPost ? <PostDropDown post_id={props.post_id} dispatch={props.dispatch}/> : undefined }
        </div>
        <p style={{paddingBottom:'20px',paddingTop:'20px',textAlign:'justify',overflow:'hidden',textOverflow:'ellipsis'}}>{props.text}</p>
        {/* { props.imgs.map( img => <img src={img.image} alt='Image could not be displayed' width='10%'/>) } */}
        <br/>
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

export default Post;