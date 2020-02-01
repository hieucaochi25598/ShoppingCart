import axios from '../../utils/axios'
import { LAY_THONG_TIN_NGUOI_DUNG, LAY_THONG_TIN_DANG_NHAP } from '../constants/QuanLyNguoiDung'
import setAuthorization from '../../utils/axios'

export const dangKyAction = (values, handleSuccess) => {
    return dispatch => {
        axios.request({
            method: 'POST',
            url: 'QuanLyNguoiDung/DangKy',
            data: {...values, maNhom: "GP01"}
        }).then(result => {
            setAuthorization(result.data.accessToken)
            // dispatch(layThongTinNguoiDung(result.data))
            //Khi goi ham handleSuccess, ham callback ben component se duoc chay
            handleSuccess()
        }).catch(error => {
            console.log(error)
        })
    }
}
export const dangNhapAction = (values, handleSuccess) => {
    return dispatch => {
        axios.request({
            method: 'POST',
            url: 'QuanLyNguoiDung/DangNhap',
            data: {...values, maNhom: "GP01"}
        }).then(result => {
            setAuthorization(result.data.accessToken)
            localStorage.setItem("userInfo", JSON.stringify(result.data))
            //Luu xuong local storage de giua lai trang thai dang nhap khi refresh page
            dispatch(layThongTinNguoiDung(result.data))

            handleSuccess()
        }).catch(error => {
            console.log(error)
        })
    }
}

export const layThongTinNguoiDung = (nguoiDung) => {
    return {
        type: LAY_THONG_TIN_NGUOI_DUNG,
        data: nguoiDung
    }
}
