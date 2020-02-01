import React from 'react'

//HOC
export const DemoHOCProp = (Component) => {
    return () => {
        const name = "Cybersoft"
        return <Component name={name} />
    }
}


//Component su dung HOC
const ComponentUsingHOC = (props) => {
    console.log(props)
    return <div>ComponentUsingHOC</div>
}
export default DemoHOCProp(ComponentUsingHOC)
