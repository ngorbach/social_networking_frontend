import React, {useEffect} from 'react';
import {connect} from 'react-redux';

export default function HOCWrapper(WrappedComponent) {
    function AuthComponent(props) {
        useEffect(() => {
            console.log('HOC',props)
            redirectUser()
        }, [props.token]);

        const redirectUser = () => {
            if ( !props.token ) {
                props.history.push('/')
            } else {
                props.history.push('/feed/')
            }
        };


        // render() {
        return <WrappedComponent {...props}/>
        // }
    }

    function mapStateToProps(state) {
        return {
            token: state.token
        }
    }

    return connect(mapStateToProps)(AuthComponent)
};