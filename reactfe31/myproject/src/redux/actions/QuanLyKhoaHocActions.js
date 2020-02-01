import { LAY_KHOA_HOC, LAY_CHI_TIET_KHOA_HOC, CHANGE_PAGE } from "../constants/QuanLyKhoaHocConstants"
import axios from '../../utils/axios'
import axios2 from 'axios'
export const themKhoaHoc = (khoaHoc) => {
    return (dispatch, getState) => {
        //Lay du lieu tu redux store thong qua getState
        const { userInfo } = getState().quanLyNguoiDungReducer
        const date = new Date()
        const dataSubmit = {
            ...khoaHoc,
            taiKhoanNguoiTao: userInfo.taiKhoan,
            ngayTao: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`, //22/12/2019
            maNhom: 'GP01'
        }
        axios2({
            method: 'POST',
            url:'https://api.imgur.com/3/image',
            data: khoaHoc.hinhAnh,
            headers: {
                'authorization': 'Client-ID 83f7b96a4e2f6df',
                'Content-Type': 'multipart/form-data'
            }
        }).then(result =>{
            console.log(result.data.data.link)
            axios.request({
                method: 'POST',
                url: 'QuanLyKhoaHoc/ThemKhoaHoc',
                data: {...dataSubmit, hinhAnh: result.data.data.link}
            }).then( result => {
                // const formData = new FormData()
                // formData.append("file",khoaHoc.hinhAnh)

                // console.log(khoaHoc.hinhAnh)
                console.log(result)
            })
        })
        
    }
}
export const layDanhSachKhoaHocAction = (danhSachKhoaHoc) => {
    return {
        type: LAY_KHOA_HOC,
        data: danhSachKhoaHoc
    }
}
export const layDanhSachKhoaHoc = (currentPage, pageSize) => {
    return dispatch => {
        //Goi API
        axios.request({
            method: 'GET',
            url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP01`
        }).then(result => {
            dispatch(layDanhSachKhoaHocAction(result.data))
        }).catch(error => {
            console.log(error)
        })
        //dispatch (layDanhSachKhoaHocAction(danhSachKhoaHoc))
    }
}

export const layChiTietKhoaHoc = (maKhoaHoc) => {
    return dispatch => {
        axios.request({
            method: 'GET',
            url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
        }).then(result => {
            dispatch(layChiTietKhoaHocAction(result.data))
        }).catch(error => {
            console.log(error)
        })
    }
}
export const layChiTietKhoaHocAction = khoaHoc => {
    return {
        type: LAY_CHI_TIET_KHOA_HOC,
        data: khoaHoc
    }
}
export const changePageAction = page => {
    return {
        type: CHANGE_PAGE,
        data: page
    }
}