import {
  XEM_CHI_TIET,
  THEM_GIO_HANG,
  TANG_SO_LUONG,
  GIAM_SO_LUONG,
  TINH_TONG_TIEN,
  XOA_GIO_HANG
} from "../constants/QuanLySanPham";
import { useDispatch } from "react-redux";

const initialState = {
  mangSanPham: [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
      soLuong: 1
    },
    {
      maSP: 2,
      tenSP: "Iphone X",
      hinhAnh: "./img/sp_iphoneX.png",
      gia: 2000,
      soLuong: 1
    },
    {
      maSP: 3,
      tenSP: "SamSung Note 7",
      hinhAnh: "./img/sp_note7.png",
      gia: 3000,
      soLuong: 1
    },
    {
      maSP: 4,
      tenSP: "ViVo 850",
      hinhAnh: "./img/sp_vivo850.png",
      gia: 4000,
      soLuong: 1
    }
  ],
  chiTietSanPham: {},
  mangGioHang: [],
  tongTien: 0
};

const quanLySanPhamReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      return { ...state, chiTietSanPham: action.data };
    }
    case THEM_GIO_HANG: {
      const mangGioHang = [...state.mangGioHang];
      const index = mangGioHang.findIndex(
        item => item.maSP === action.data.maSP
      );
      if (index === -1) {
        mangGioHang.push(action.data);
      }
      return { ...state, mangGioHang };
    }
    case TANG_SO_LUONG: {
      const mangGioHang = [...state.mangGioHang];
      
      const index = mangGioHang.findIndex(
        item => item.maSP === action.data
      );
      if (index !== -1) {
        mangGioHang[index].soLuong += 1;
        
      }

      return { ...state};
    }
    case GIAM_SO_LUONG:
        {
            const mangGioHang = [...state.mangGioHang]
            const index = mangGioHang.findIndex(item => item.maSP === action.data)
            if(index !== -1) {
                if(mangGioHang[index].soLuong > 1)
                {
                    mangGioHang[index].soLuong -=1
                }
                
            }
            return{...state, mangGioHang}
        }
    case TINH_TONG_TIEN:
        {   
            const mangGioHang = [...state.mangGioHang]
            state.tongTien = 0
            for(let i = 0; i < mangGioHang.length; i++){
                state.tongTien += mangGioHang[i].soLuong * mangGioHang[i].gia
            }
            return{...state}
        }
    case XOA_GIO_HANG: 
    {
        const mangGioHang = [...state.mangGioHang]
        const index = mangGioHang.findIndex(item => item.maSP === action.data)
        if(index !== -1){
            mangGioHang.splice(index ,1)
        }
        return {...state, mangGioHang}
    }
    default:
      return state;
  }
};

export default quanLySanPhamReducer;
