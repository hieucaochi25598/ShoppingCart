import React, { Component } from 'react'
import DienThoai from './DienThoai'

export default class ListDienThoai extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.mangDienThoaiProps.map((dienThoai, index) => (
                        <DienThoai key={index} dienThoaiProps={dienThoai}/>
                    ))}
                </div>
            </div>
        )
    }
}
