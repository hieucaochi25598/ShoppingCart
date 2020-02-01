import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { xemChiTietAction, themGioHangAction, tinhTongTienAction } from "../redux/actions/QuanLySanPham";

const DanhSachSanPham = () => {
  const { mangSanPham } = useSelector(state => state.quanLySanPhamReducer);
  const dispatch = useDispatch()
  return (
    <div className="container">
        <div className="row">
      {mangSanPham.map(item => (
          <div className="col-3">
        <div className="card" key={item.maSP}>
          <img className="card-img-top" src={item.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <p className="card-text">Gia: ${item.gia}</p>
            
          <button className="btn btn-danger" style={{width: "100%"}} onClick={() => {dispatch(themGioHangAction(item)); dispatch(tinhTongTienAction())}}>Thêm giỏ hàng</button>
        <button className="btn btn-success mt-2" style={{width: "100%"}} onClick={() => dispatch(xemChiTietAction(item))}>Xem chi tiết</button>
        
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default DanhSachSanPham;
