import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tangSoLuongAction, giamSoLuongAction, tinhTongTienAction, xoaGioHangAction } from '../redux/actions/QuanLySanPham'

const GioHang = () => {
    const {mangGioHang, tongTien} = useSelector(state => state.quanLySanPhamReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>GIỎ HÀNG</h1>
            <table className="table">
                <thead>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </thead>
                <tbody>
                    {mangGioHang.map(item => (
                        <tr key={item.maSP}>
                        <td scope="row">
                            <img src={item.hinhAnh} alt="123" width={100} height={100}/>
                        </td>
                        <td>
                            <button className="btn btn-secondary" onClick={() => {dispatch(giamSoLuongAction(item.maSP)); dispatch(tinhTongTienAction())}}>-</button>
                    <span className="ml-4 mr-4">{item.soLuong}</span>
                            <button className="btn btn-primary" onClick={() => {dispatch(tangSoLuongAction(item.maSP)); dispatch(tinhTongTienAction())}}>+</button>
                        </td>
                        <td>
                            ${item.gia}
                        </td>
                        <td><button className="btn btn-danger" onClick={() => {dispatch(xoaGioHangAction(item.maSP)); dispatch(tinhTongTienAction())}}>Xóa</button></td>
                    </tr>
                    ))}
                    
                </tbody>
<h4>Tổng cộng: ${tongTien}</h4>
            </table>
        </div>
    )
}
export default GioHang
