import React, { Component } from 'react'
import ListDienThoai from './ListDienThoai'

export default class BaiTapDienThoai extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mangDienThoai: [
                { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
                { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
                { maSP: 3, tenSP: 'SamSung Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
                { maSP: 4, tenSP: 'ViVo 850', hinhAnh: './img/sp_vivo850.png', gia: 4000 }
            ]
        }
    }

    render() {
        return (
            <div>
                <ListDienThoai mangDienThoaiProps={this.state.mangDienThoai}/>
            </div>
        )
    }
}
