import React, { Component } from 'react'
import SmartPhone from './SmartPhone'

export default class SmartPhoneList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sanPhamChiTiet: this.props.mangSmartPhone[0]
        }
    }
    
    xemChiTiet = (sp) => {
        this.setState({
            sanPhamChiTiet: sp
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.mangSmartPhone.map((dt, index) => (
                        <SmartPhone key={index} dt={dt} xemChiTiet={this.xemChiTiet}/>
                    ))}
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={this.state.sanPhamChiTiet.hinhAnh} alt width={400} height={400}/>
                    </div>
                    <div className="col-8">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Thong so ky thuat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Man Hinh</td>
                                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
       
                                </tr>
                                <tr>
                                    <td scope="row">He Dieu Hanh</td>
                                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                    
                                </tr>
                                <tr>
                                    <td scope="row">Camera truoc</td>
                                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                    
                                </tr>
                                <tr>
                                    <td scope="row">Camera sau</td>
                                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                    
                                </tr>
                                <tr>
                                    <td scope="row">RAM</td>
                                    <td>{this.state.sanPhamChiTiet.ram}</td>
                                    
                                </tr>
                                <tr>
                                    <td scope="row">ROM</td>
                                    <td>{this.state.sanPhamChiTiet.rom}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
