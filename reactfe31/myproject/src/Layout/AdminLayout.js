import React from 'react'

const AdminLayout = (props) => {
    return (
        <div className="d-flex">
            <div style={{width: '300px', height: '100vh'}}>Sidebar</div>
            <div>{props.children}</div>
        </div>
    )
}
export default AdminLayout
