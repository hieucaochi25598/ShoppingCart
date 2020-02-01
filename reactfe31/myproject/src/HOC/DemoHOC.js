// 1 function nhan vao 1 component va return ve component moi
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
//HOC doi voi function Component
const DemoHOC = (Component) => {
    return () => {
        return (
            <div className="container">
                <Component />
            </div>
        )
    }
}


//HOC doi vs class component 
const DemoClassHOC = Component => {
    return class DemoHOC extends React.Component {
        render() {
            return (
                <div className="container">
                    <Component />
                </div>
            )
        }
    }
}
export default DemoHOC
