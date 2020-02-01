import React from 'react'
import Header from './Header'
const UserLayout = (props) => {
    return (
        // <>
        //     <Header/>
        // </>
        <React.Fragment>
            <Header />
            {props.children}
        </React.Fragment>
    )
}
export default UserLayout
