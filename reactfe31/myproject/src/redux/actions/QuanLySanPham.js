import { XEM_CHI_TIET, THEM_GIO_HANG, TANG_SO_LUONG, GIAM_SO_LUONG, TINH_TONG_TIEN, XOA_GIO_HANG } from "../constants/QuanLySanPham"

export const xemChiTietAction = (sp) => {
    return {
        type:XEM_CHI_TIET,
        data: sp
    }
}
export const themGioHangAction = (sp) => {
    return {
        type: THEM_GIO_HANG,
        data: sp
    }
}
export const tangSoLuongAction = (maSP) => {
    return {
        type: TANG_SO_LUONG,
        data: maSP
    }
}
export const giamSoLuongAction = (maSP) =>{
    return {
        type: GIAM_SO_LUONG,
        data: maSP
    }
}
export const tinhTongTienAction = () => {
    return {
        type: TINH_TONG_TIEN
    }
}
export const xoaGioHangAction = (maSP) =>{
    return {
        type: XOA_GIO_HANG,
        data: maSP
    }
}