import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from "../../styles/buttons"
import { listPostsFunction } from "../../store/actions/listPostsAction";
import { fetchPostFunction } from "../../store/actions/fetchPostAction";
import { Ul,Li } from '../../styles/dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const DeletePost = (props) => {

    const deletePostHandler = (e) => {
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
            props.dispatch(listPostsFunction(props.post_id))
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }
    return <Li onClick={deletePostHandler}><FontAwesomeIcon icon={faTrash} height='90px' color='rgb(200,200,200)' style={{marginRight:'8px'}}/>delete</Li>
}


export default connect()(DeletePost);
