import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangCuocAction, giamCuocAction } from '../redux/actions/GameBauCua'
class DanhSachCuoc extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.mangDanhSachCuoc.map((ds, index) => (
                        <summary key={ds.ma} className="card col-md-4" >
                            <img className="card-img-top" src={ds.hinhAnh} alt="true" width={200} height={200}/>
                            <div className="card-body d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={()=>{this.props.giamCuoc(ds.ma)}}>-</button>
                                <p className="card-text text-center mx-5">{ds.diemCuoc}</p>
                                <button className="btn btn-info" onClick={()=>{this.props.tangCuoc(ds)}}>+</button>
                            </div>
                        </summary>
                    ))}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    mangDanhSachCuoc: state.gameBauCua.danhSachCuoc
})

const mapDispatchToProps = dispatch => ({
    tangCuoc: (item) => dispatch(tangCuocAction(item)),
    giamCuoc: (ma) => dispatch(giamCuocAction(ma))
})

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)
