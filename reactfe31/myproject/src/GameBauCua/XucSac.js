import React, { Component } from 'react'
import {connect} from 'react-redux'
class XucSac extends Component {
    render() {
        return (
        <div>
                {this.props.xucSac.map((xs, index) => (
                    
                    <img src={xs.hinhAnh} alt="" width={50} height={50}/>
                    
                ))}
                </div>
        )
    }
}

const mapStateToProps = state => ({
    xucSac: state.gameBauCua.xucSac
})

export default connect(mapStateToProps)(XucSac);



