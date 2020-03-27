import React from 'react';
import { fetchPostFunction } from "../../store/actions/fetchPostAction";
import {Dropdown,DropdownContent} from '../../styles/dropdown'
import ChangePost from './ChangePost'
import DeletePost from './DeletePost'
import { HOST_URL } from "../../constants.js"
import { Ul } from '../../styles/dropdown'


const PostDropDown = props => {

    // const changePostHandler = (e) => {
    //     e.preventDefault();
    //     const URL = `${HOST_URL}backend/api/social/posts/${props.post_id}/`;
    //     const headers = new Headers({
    //         'Content-Type': 'application/json',
    //         "Authorization": "Bearer " + localStorage.token
    //     });
    //     const config = {
    //         method: 'PUT',
    //         body: JSON.stringify({content:'changed post'}),
    //         headers
    //     };
    //     const apiInformation = fetch(URL, config)
    //         .then((response) => response.text())
    //         .then((result) => {
    //         console.log('Success:', result);
    //         props.dispatch(fetchPostFunction(props.post_id))
    //         })
    //         .catch((error) => {
    //         console.error('Error:', error);
    //         })
    //     }

    // const deletePostHandler = (e) => {
    //     e.preventDefault();
    //     const URL = `${HOST_URL}backend/api/social/posts/${props.post_id}/`;
    //     const headers = new Headers({
    //         'Content-Type': 'application/json',
    //         "Authorization": "Bearer " + localStorage.token
    //     });
    //     const config = {
    //         method: 'DELETE',
    //         headers
    //     };
    //     const apiInformation = fetch(URL, config)
    //         .then((response) => response.text())
    //         .then((result) => {
    //         console.log('Success:', result);
    //         props.dispatch(fetchPostFunction(props.post_id))
    //         })
    //         .catch((error) => {
    //         console.error('Error:', error);
    //         })
    //     }

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

export default PostDropDown