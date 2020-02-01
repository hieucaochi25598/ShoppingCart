import React, { Component } from 'react'

export default class DienThoai extends Component {
    render() {
        const { dienThoaiProps } = this.props
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={dienThoaiProps.hinhAnh} alt width={250} height={250}/>
                    <div className="card-body">
                        <h4 className="card-title">{dienThoaiProps.tenSP}</h4>
                        <p className="card-text">{dienThoaiProps.gia}</p>
                    </div>
                </div>

            </div>
        )
    }
}
