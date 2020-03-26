import React from 'react';
import { connect } from 'react-redux';
import { listLikesFunction } from "../../store/actions/listLikesAction";
import { Button } from "../../styles/buttons"
import { Span } from "../../styles/likes"

const LikePost = (props) => {

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
                props.dispatch(listLikesFunction())
            });
        }
        return props.liked_posts.map( elem=>elem.id ).includes(props.post_id) ? <><Span style={{color:'green'}}> liked</Span><Button onClick={likePostHandler}>unlike</Button></> : <Button onClick={likePostHandler}>like</Button>
}


export default connect()(LikePost);
