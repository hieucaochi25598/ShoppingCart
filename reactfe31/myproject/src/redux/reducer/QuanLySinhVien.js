import { THEM_SINH_VIEN, XOA_SINH_VIEN, SUA_SINH_VIEN, CHON_SINH_VIEN, TOGGLE_MODAL } from "../constants/QuanLySinhVien";

///Tao State luc dau
const initialState = {
    danhSachSinhVien: [
        { maSV: 1, hoTenSV: 'Nam', tuoiSV: 23, email: "nam@gmail.com" }
    ],
    sinhVienDangChon: {},
    isOpen: false
}

const quanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            {
                return {...state , isOpen: action.data};
            }
        case THEM_SINH_VIEN:
            //Xử lý state thay đổi
            {
                const danhSachSinhVien = [...state.danhSachSinhVien];
                danhSachSinhVien.push(action.data)
                return { ...state, danhSachSinhVien };
            }
        case XOA_SINH_VIEN:
            {   let danhSachSinhVien = [...state.danhSachSinhVien]
                danhSachSinhVien = state.danhSachSinhVien.filter(sv => sv.maSV !== action.data)
                return { ...state, danhSachSinhVien };
            }
        case SUA_SINH_VIEN:
            {
                const index = state.danhSachSinhVien.findIndex(sv => sv.maSV === action.data.maSV)
                const danhSachSinhVien = [...state.danhSachSinhVien];
                danhSachSinhVien[index] = action.data;
                return { ...state, danhSachSinhVien};
            }
        case CHON_SINH_VIEN:
            {
                return {...state, sinhVienDangChon: action.data}
            }
        default:
            return state;
    }
}
export default quanLySinhVienReducer;