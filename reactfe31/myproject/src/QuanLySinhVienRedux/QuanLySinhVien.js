import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import DanhSachSanPham from '../Props/DanhSachSanPham'
import DanhSachSinhVien from './DanhSachSinhVien'
import { toggleModalAction, chonSinhVienAction } from '../redux/actions/QuanLySinhVien'
import { connect } from 'react-redux'

class QuanLySinhVien extends Component {

    render() {
        return (
            <div className="container">
                <h1>Quan Ly Sinh Vien</h1>
                <button onClick={() => { this.props.onToggle(true); this.props.chonSinhVien({}) }} className="btn btn-success mb-5">Them Sinh Vien</button>
                <DanhSachSinhVien />
                <FormSinhVien />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    onToggle: (status) => dispatch(toggleModalAction(status)),
    chonSinhVien: sinhVien => dispatch(chonSinhVienAction(sinhVien))
})

export default connect(null, mapDispatchToProps)(QuanLySinhVien);