import React, { Component } from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import {connect} from 'react-redux'
import XucSac from './XucSac'
import { choiGameAction } from '../redux/actions/GameBauCua'
class GameBauCua extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    shouldComponentUpdate(props){
        //number string boolean, null. undefine so sanh gia tri
        //object array so sanh tham chieu
        //chan ham render khi return false 
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Game Bau Cua</h1>
                <div className="container">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={() => this.props.choiGame()}>Choi</button>
                    <XucSac/>
                    <p>{this.props.tongTien}</p>
                </div>
                </div>
                
                <DanhSachCuoc/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    tongTien: state.gameBauCua.tongTien
})

const mapDispatchToProps = dispatch => ({
    choiGame: () => dispatch(choiGameAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);