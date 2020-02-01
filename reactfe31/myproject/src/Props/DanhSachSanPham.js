import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chiTietSanPham: {}
        }
    }

    xemChiTiet = (sp) => {
        console.log(sp);
        this.setState({ chiTietSanPham: sp });
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    {this.props.mangSanPham.map((sp, index) => (
                        <SanPham key={sp.maSP} sp={sp} xemChiTiet={this.xemChiTiet} laySanPham = {this.props.laySanPham}/>
                    ))}
                </div>
                {Object.keys(this.state.chiTietSanPham).length > 0 ? (
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.state.chiTietSanPham.hinhAnh} width="100%" height="100%"/>
                        </div>
                        <div className="col-md-8">
                            <table className="table text-left">
                                <tbody>
                                    <tr>
                                        <th colSpan="2">Thong so ky thuat</th>
                                    </tr>
                                    <tr>
                                        <td>Man Hinh</td>
                                        <td>{this.state.chiTietSanPham.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>He Dieu Hanh</td>
                                        <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera truoc</td>
                                        <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
