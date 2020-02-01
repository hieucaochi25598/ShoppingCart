import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
import ProductLists from './Components/ProductLists';
import LaptopLists from './Components/LaptopLists';
import Footer from './Components/Footer';
import Event from './Components/Event';
import BaiTapState from './Components/BaiTapState';
import BaiTapSanPham from './Props/BaiTapSanPham';
import BaiTapStateLogin from './Components/BaiTapStateLogin';
import BaiTapDienThoai from './BTDienThoai/BaiTapDienThoai';
import BTPropsCallBack from './PropsCallBack/BTPropsCallBack';
import QuanLySinhVien from './QuanLySinhVienRedux/QuanLySinhVien';
import GameBauCua from './GameBauCua/GameBauCua';
import { DemoClass, DemoHooks } from './Hooks/DemoHooks';
import DanhSachKhoaHoc from './E-Learning/DanhSachKhoaHoc';
import { Switch, Route } from 'react-router-dom'

import PageNotFound from './Layout/PageNotFound';
import ChiTietKhoaHoc from './E-Learning/ChiTietKhoaHoc';
import DangKy from './E-Learning/DangKy';
import DangNhap from './E-Learning/DangNhap';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { layThongTinNguoiDung } from './redux/actions/QuanLyNguoiDung';
import DemoLayoutHOC from './HOC/DemoLayoutHOC';
import ComponentUsingHOC from './HOC/DemoHOCProp'
import UserAuth from './Auth/UserAuth';
import UserLayout from './Layout/UserLayout';
import AdminLayout from './Layout/AdminLayout';
import QuanLyKhoaHoc from './E-Learning/QuanLyKhoaHoc';
import AdminAuth from './Auth/AdminAuth';
import ThemKhoaHoc from './E-Learning/ThemKhoaHoc';
import CustomHookDanhSachKhoaHoc from './E-Learning/CustomHookDanhSachKhoaHoc';
import { setAuthorization } from './utils/axios';
import LoaiCauHoi1 from './BTCauHoi/LoaiCauHoi1';
import QuanLySanPham from './BTQuanLySanPham/QuanLySanPham';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    //Set authorization khi App duoc chay neu co user trong localStorage 
    //Sau do goi action layThongTinNguoiDung de luu vao store lai
    if (userInfo) {
      setAuthorization(userInfo.accessToken)
      dispatch(layThongTinNguoiDung(userInfo))
    }
  }, [])
  return (
    <div className="App">
      {/* <Header tieude='Chao The gioi'/>
        <Carousel/>
        <ProductLists/>
        <LaptopLists/>
        <Footer name='Cybersoft'/> */}
      {/* <Event/> */}
      {/* <BaiTapState/> */}
      {/* <BaiTapSanPham/> */}
      {/* <QuanLySinhVien/> */}
      {/* <QuanLySinhVien/> */}
      <QuanLySanPham/>
      {/* <QuanLySinhVien/> */}
      {/* <QuanLySinhVien/> */}
      {/* <BaiTapStateLogin name='truyen props tu app xuong con'/> */}
      {/* <BaiTapListSP/> */}
      {/* <GameBauCua/> */}
      {/* <DemoClass/> */}
      {/* <DemoHooks/> */}
      {/* <div>
        
        <Switch>
          <Route path="/register" component={DangKy} />
          <Route path="/login" component={DangNhap} />
          <Route path="/customhook" component={CustomHookDanhSachKhoaHoc}/>

          <Route path="/demo-hoc" component={ComponentUsingHOC} />
          <AdminLayout path="/admin">
            <Switch>
              <AdminAuth path="/admin/courses-management" component={QuanLyKhoaHoc} />
              <AdminAuth path="/admin/create-courses" component={ThemKhoaHoc}/>
            </Switch>
          </AdminLayout>
          <UserLayout path="/">
            <Switch>
              <UserAuth path="/courses-list" component={DanhSachKhoaHoc} />
              <Route path="/demo-hook" component={DemoHooks} />
              <UserAuth path="/course-detail/:maKhoaHoc" component={ChiTietKhoaHoc} />
              <Route path="/game-bau-cua" component={GameBauCua} />
            </Switch>
          </UserLayout>
          <Route component={PageNotFound} />
        </Switch>
      </div> */}

      {/* <BaiTapDienThoai /> */}
      {/* <BTPropsCallBack/> */}
      {/* <LoaiCauHoi1/> */}
    </div>
  );
}

export default App;
