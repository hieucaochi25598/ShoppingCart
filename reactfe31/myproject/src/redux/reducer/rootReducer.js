import {combineReducers} from 'redux'
import quanLySinhVien from './QuanLySinhVien';
import gameBauCua from './GameBauCua'
import quanLyKhoaHocReducer from './QuanLyKhoaHocReducer'
import quanLyNguoiDungReducer from './QuanLyNguoiDung'
import baiTapCauHoiReducer from './BaiTapCauHoi'
import quanLySanPhamReducer from './QuanLySanPham'
export default combineReducers({
    quanLySinhVien: quanLySinhVien,
    gameBauCua: gameBauCua,
    quanLyKhoaHocReducer: quanLyKhoaHocReducer,
    quanLyNguoiDungReducer: quanLyNguoiDungReducer,
    baiTapCauHoiReducer: baiTapCauHoiReducer,
    quanLySanPhamReducer: quanLySanPhamReducer
    


})