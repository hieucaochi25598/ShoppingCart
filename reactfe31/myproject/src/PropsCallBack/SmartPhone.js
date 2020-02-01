import React, { Component } from 'react'

export default class SmartPhone extends Component {

    render() {
        const { dt } = this.props
        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={dt.hinhAnh} alt width={300} height={300}/>
                    <div className="card-body">
                        <h4 className="card-title">{dt.tenSP}</h4>
                        <p className="card-text">{dt.heDieuHanh}</p>
                        <button className="btn btn-success" onClick={() => this.props.xemChiTiet(dt)}>Xem chi tiet</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
