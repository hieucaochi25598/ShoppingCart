import React from 'react'
import { useSelector } from 'react-redux'

const ChiTietSanPham = () => {
    const {chiTietSanPham} = useSelector(state => state.quanLySanPhamReducer)
    const {mangSanPham} = useSelector(state => state.quanLySanPhamReducer)
    
    return (
        <div className="container">
            <h1 className="mt-3">CHI TIẾT SẢN PHẨM</h1>
            <div className="row">
                <div className="col-4">
                    <img src={chiTietSanPham.hinhAnh} alt="123" width="100%" height={300}/>
                </div>
                <div className="col-8">
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="2">Thông số kỹ thuật</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">Mã SP</td>
                                <td>{chiTietSanPham.maSP}</td>
                                
                            </tr>
                            <tr>
                                <td scope="row">Tên SP</td>
                                <td>{chiTietSanPham.tenSP}</td>
    
                            </tr>
                            <tr>
                                <td scope="row">Giá</td>
                                <td>{chiTietSanPham.gia}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ChiTietSanPham
