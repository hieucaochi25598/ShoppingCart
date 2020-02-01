import React from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import ChiTietSanPham from './ChiTietSanPham'
import GioHang from './GioHang'

const QuanLySanPham = () => {
    return (
        <div className="container">
            <DanhSachSanPham/>
            <ChiTietSanPham/>
            <GioHang/>
        </div>
    )
}
export default QuanLySanPham
