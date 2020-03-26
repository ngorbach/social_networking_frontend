import React from 'react';
import { connect } from 'react-redux';
import { Button } from "../../styles/buttons"
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { Ul,Li } from '../../styles/dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { fetchPostFunction } from "../../store/actions/fetchPostAction";


const ChangePost = (props) => {

    const commentPostHandler = (e) => {
        e.preventDefault();
        const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/${props.post_id}/`;
        const headers = new Headers({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.token
        });
        const config = {
            method: 'PUT',
            body: JSON.stringify({content:'changed this post'}),
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
    return <Li onClick={commentPostHandler}><FontAwesomeIcon icon={faEdit} height='90px' color='rgb(200,200,200)' style={{marginRight:'8px'}}/>change</Li>
}


export default connect()(ChangePost);