import React from 'react';
import { connect } from 'react-redux';
import { listFollowingFunction } from "../../store/actions/listFollowingAction";
import { Span } from "../../styles/likes"
import { Button } from "../../styles/buttons"

const FollowUser = (props) => {

  const followUserHandler = (e) => {

    const URL = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${props.user_id}/`;
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });
    const config = { method: 'POST',headers};
    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          props.dispatch(listFollowingFunction())
        });
    }

    // return props.following.map( elem=>elem.id ).includes(props.user_id) ? <><Span style={{color:'green'}}> following</Span><Button onClick={followUserHandler}>unfollow</Button></> : <Button onClick={followUserHandler}>follow</Button>
    return props.following.map( elem=>elem.id ).includes(props.user_id) ? <Button style={{border:'solid 1px lightgrey',paddingLeft:'10px',paddingRight:'10px'}} onClick={followUserHandler}>follow</Button> : <Button style={{border:'solid 1px lightgrey',paddingLeft:'10px',paddingRight:'10px',backgroundColor:'purple',color:'white'}} onClick={followUserHandler}>following</Button>
}

export default connect()(FollowUser);
