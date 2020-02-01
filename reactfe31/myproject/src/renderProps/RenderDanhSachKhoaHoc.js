import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachKhoaHoc } from '../redux/actions/QuanLyKhoaHocActions'
const RenderDanhSachKhoaHoc = (props) => {
    const dispatch = useDispatch()
    const { danhSachKhoaHoc, currentPage, totalCount } = useSelector(state => state.quanLyKhoaHocReducer)
    useEffect(() => {
        dispatch(layDanhSachKhoaHoc(currentPage, 8))
    }, [currentPage])
    
    return (
        <div>
            {props.render({danhSachKhoaHoc, currentPage, totalCount})}
        </div>
    )
}
export default RenderDanhSachKhoaHoc
