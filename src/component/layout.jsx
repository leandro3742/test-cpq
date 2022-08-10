import React from 'react'
import { useDispatch } from 'react-redux';
import Navigation from './navigation'

const Layout = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Navigation dispatch={dispatch} />
            {props.children}
        </div>
    )
}

export default Layout
