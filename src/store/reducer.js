import { login, logout, listUsers, listLikes, listPosts,
    fetchUser, likePost, listFollowing, registerUser, 
    retrieveLoggedUserInfo, fetchUserPosts, fetchPost } from "./types";


const initialState = {
    token: null,
    userAuth: null,
    error: null,
    user: {
        posts:[]
    },
    users: [],
    posts: [],
    likes: [],
    following:[],
    registration: '',
    loggedUserInfo: {},
    post: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === login) {
            console.log('in da login reducer',state)
            return {
                ...state,
                token: action.payload,
                userAuth: true,
                //loggedUserInfo: action.payload.user
            }
        }
    else if (action.type === logout) {
        console.log('in da logout reducer')
            return {
                ...state,
                token: null,
                userAuth: null,
                error: null
            }
        }
    else if (action.type === listUsers) {
        console.log('in da list users reducer',action.payload)
            return {
                ...state,
                users: action.payload
            }
        }
    else if (action.type === listLikes) {
            console.log('in da list likes reducer',action.payload)
                return {
                    ...state,
                    likes: action.payload
                }
            }
    else if (action.type === listPosts) {
                console.log('in da list posts reducer',action.payload)
                    return {
                    ...state,
                    posts: action.payload
                }
            }
    else if (action.type === fetchUser) {
                console.log('in da fetch user reducer',action.payload)
                const index = state.users.map( user => user.id ).indexOf( action.payload.id )
                const users = state.users;
                users[index] = action.payload;
                console.log('in da fetch user reducer',users)
                    return {
                    ...state,
                    user: {...state.user,...action.payload},
                    users: [...users]
                }
            }
    else if (action.type === likePost) {
                console.log('in da like post reducer',action.payload)
                    return {
                    ...state,
                    user: action.payload
                }
            }
    else if (action.type === listFollowing) {
                console.log('in da following reducer',action.payload)
                    return {
                    ...state,
                    following: action.payload
                }
            }
    else if (action.type === registerUser) {
                console.log('in da registration reducer',action.payload)
                    return {
                    ...state,
                    registration: action.payload
                }
            }
    else if (action.type === retrieveLoggedUserInfo) {
                console.log('in da retrieveLoggedUserInfo reducer',action.payload)
                    return {
                    ...state,
                    loggedUserInfo: action.payload
                }
            }
    else if (action.type === fetchUserPosts) {
        // console.log('in da fetch user posts')
        const index = state.users.map( user => user.id ).indexOf( state.user.id )
        return {
            ...state,
            user: {...state.user,posts:action.payload},
        }
    }
    else if (action.type === fetchPost) {
        // console.log('in da fetch post',action.payload)
        const index = state.posts.map( post => post.id ).indexOf( action.payload.id )
        const posts = state.posts;
        if (index === -1) {
            console.log('in da fetch post1',posts)
            posts.push(action.payload)
            console.log('in da fetch post1',posts)
        } else {
            console.log('in da fetch post2',index)
            posts[index] = action.payload
        }
        console.log('in da fetch post',posts)
        return {
            ...state,
            post: action.payload,
            posts: [...posts]
        }
    }
    return state;
}

export default reducer;