import {useState, useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import { layDanhSachKhoaHoc, changePageAction } from "../redux/actions/QuanLyKhoaHocActions"
const useFetchCoursesList = () => {
    const dispatch = useDispatch()
    const {danhSachKhoaHoc, currentPage, totalCount} = useSelector(state => state.quanLyKhoaHocReducer)
    const onChangePage = (page) => {
        dispatch(changePageAction(page))
    }
    useEffect(() => {
        dispatch(layDanhSachKhoaHoc(currentPage, 8))
    }, [currentPage])

    return { danhSachKhoaHoc, currentPage, totalCount, onChangePage}
}
export default useFetchCoursesList