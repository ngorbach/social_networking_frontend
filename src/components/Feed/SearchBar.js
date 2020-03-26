import React from 'react';
import {connect} from 'react-redux';
import { SearchContainer,SearchSubContainer,SearchSubSubContainer,SearchText,SearchTextActive } from '../../styles/containers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { listPostsFunction } from "../../store/actions/listPostsAction";


const SearchBar = (props) => {

const likedPostsHandler = (e) => {
        e.preventDefault();
        props.dispatch(listPostsFunction())
        props.history.push('/liked/')
    }

const friendsPostsHandler = (e) => {
        e.preventDefault();
        props.dispatch(listPostsFunction())
        props.history.push('/friends/')
    }

const followingPostsHandler = (e) => {
        e.preventDefault();
        props.dispatch(listPostsFunction())
        props.history.push('/following/')
    }

console.log('H',props.history.location.pathname)

return <SearchContainer>
<SearchSubContainer>
    <SearchSubSubContainer>
        <img src='../assets/svgs/search_icon.svg'/>
        <input placeholder='Search Posts...' style={{border:'none',background:'Transparent',marginLeft:'20px'}}/>
    </SearchSubSubContainer>
    <SearchSubSubContainer>
        { props.history.location.pathname === '/liked/' ? <SearchTextActive onClick={likedPostsHandler}>Liked</SearchTextActive> : <SearchText onClick={likedPostsHandler}>Liked</SearchText> }
        { props.history.location.pathname === '/friends/' ? <SearchTextActive onClick={friendsPostsHandler}>Friends</SearchTextActive> : <SearchText onClick={friendsPostsHandler}>Friends</SearchText> }
        { props.history.location.pathname === '/following/' ? <SearchTextActive onClick={followingPostsHandler}>Following</SearchTextActive> : <SearchText onClick={followingPostsHandler}>Folowing</SearchText> }
    </SearchSubSubContainer>
</SearchSubContainer>
</SearchContainer>
}

export default connect()(SearchBar);