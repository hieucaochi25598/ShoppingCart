import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { themSinhVienAction, toggleModalAction, suaSinhVienAction } from '../redux/actions/QuanLySinhVien'
class FormSinhVien extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maSV: '',
            hoTenSV: '',
            tuoiSV: '',
            email: ''
        }
    }

    //Viet han handleChange
    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value //name dang la bien nen phai de ngoac vuong

        })
    }

    handleSubmit = () => {
        const sinhVien = { ...this.state };
        //this.props.mangSV, this.props.themSinhVien
        const index = this.props.mangSV.findIndex(sv => sv.maSV == sinhVien.maSV)
        if(index === -1){
            this.props.themSinhVien(sinhVien);
        } else {
            this.props.suaSinhVien(sinhVien);
        }
        console.log(this.props.mangSV)
    }

    //khi sinh vien dang chon duoc thay doi ham nay se duoc goi lai
    componentDidUpdate(prevProps) {
        if (prevProps.sinhVienDangChon !== this.props.sinhVienDangChon) {
            const { maSV, hoTenSV, tuoiSV, email } = this.props.sinhVienDangChon;
            this.setState({
                maSV: maSV || "", //neu sinhVienSua = null hoac rong this se tra ve rong
                hoTenSV: hoTenSV || "",
                tuoiSV: tuoiSV || "",
                email: email || ""
            });
        }
    }


    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => {this.props.onToggle(false)}}>
                <ModalHeader>Form Sinh Vien</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Ma sinh vien</label>
                            <input type="text" className="form-control" name="maSV" value={this.state.maSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Ho ten</label>
                            <input type="text" className="form-control" name="hoTenSV" value={this.state.hoTenSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tuoi</label>
                            <input type="number" className="form-control" name="tuoiSV" value={this.state.tuoiSV} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={() => {this.handleSubmit(); this.props.onToggle(false)}}>Luu</button>
                    <button className="btn btn-danger" onClick={() => this.props.onToggle(false)}>Huy</button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    mangSV: state.quanLySinhVien.danhSachSinhVien,
    isOpen: state.quanLySinhVien.isOpen,
    sinhVienDangChon: state.quanLySinhVien.sinhVienDangChon
})

const mapDispatchToProps = dispatch => ({
    themSinhVien: sinhVien => dispatch(themSinhVienAction(sinhVien)),
    onToggle: (status) => dispatch(toggleModalAction(status)),
    suaSinhVien: sinhVien => dispatch(suaSinhVienAction(sinhVien))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien);
