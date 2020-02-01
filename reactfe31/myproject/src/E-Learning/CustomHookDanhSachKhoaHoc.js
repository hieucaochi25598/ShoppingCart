import React from 'react'
import useFetchCoursesList from "../Hooks/useFetchCourseList";
import PaginationComponent from '../Layout/Pagination';
const CustomHookDanhSachKhoaHoc = () => {
    const {
        danhSachKhoaHoc,
        currentPage,
        totalCount,
        onChangePage
    } = useFetchCoursesList()
    return (
        <div className="container">
            <div className="row">
                {danhSachKhoaHoc.map(item => (
                    <div className="card">
                        <img className="card-img-top" src={item.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                            <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <PaginationComponent pageSize={8} currentPage={currentPage} totalCount={totalCount} onChangePage={onChangePage}/>
            </div>
        </div>
    )
}
export default CustomHookDanhSachKhoaHoc
