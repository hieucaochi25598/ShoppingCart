import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import axios from '../utils/axios'
import { layDanhSachKhoaHocAction, layDanhSachKhoaHoc, changePageAction } from '../redux/actions/QuanLyKhoaHocActions'
import PaginationComponent from '../Layout/Pagination'
import RenderDanhSachKhoaHoc from '../renderProps/RenderDanhSachKhoaHoc'
import '../css/DanhSachKhoaHoc.css'
const DanhSachKhoaHoc = ({history}) => {
    //chay tu day truoc sau do quay len useEfeect
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h1>Danh Sach Khoa Hoc</h1>
            <RenderDanhSachKhoaHoc render={propsrender => (
                <div>
                    <div className="row">
                        {propsrender.danhSachKhoaHoc &&
                            propsrender.danhSachKhoaHoc.map(item => (
                                <div className="col-4 mb-4">
                                    <div className="card">
                                        <div className="img-div">
                                            <img className="card-img-top" src={item.hinhAnh} alt />
                                            <div className="button-div">
                                            <button onClick={() => history.push(`/course-detail/${item.maKhoaHoc}`)} className="btn btn-success btn-detail">Chi tiet khoa hoc</button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.biDanh}</h4>
                                            <p className="card-text">{item.luotXem}</p>
                                            
                                            {/* //history dung de dieu duong trang web
                                //push day qua 1 trang moi nhung lich su van giu lai
                                //replace thay the duong dan hien tai back ve se khong dung */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        {/* <PaginationComponent currenPage={currentPage} pageSize={8} totalCount={27} onChangePage={onChangePage}/> */}
                        <PaginationComponent currenPage={propsrender.currentPage}
                            pageSize={8} //Constants co dinh so phan tu trong 1 trang ma ban muon
                            totalCount={propsrender.totalCount} //tong so luong BE tra ve
                            onChangePage={page => dispatch(changePageAction(page))} />
                    </div>
                </div>
            )} />
        </div>
    )
}
// const mapDispatchToProps = dispatch => ({
//     onChangePage: page => dispatch(changePageAction(page))
// })
// export default connect(null, mapDispatchToProps)(DanhSachKhoaHoc)
export default DanhSachKhoaHoc
