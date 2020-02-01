import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { layChiTietKhoaHoc } from '../redux/actions/QuanLyKhoaHocActions'
import {Card, CardBody, CardImg} from 'reactstrap'
const ChiTietKhoaHoc = ({ layChiTietKhoaHoc, chiTietKhoaHoc, hoTen ,...props}) => {
    useEffect(() => {
        //Truoc khi dispatch lay ma khoa hoc tu tren url xuong
        const {maKhoaHoc} = props.match.params
        //Dispatch action goi API
        layChiTietKhoaHoc(maKhoaHoc)
    }, [])
    // console.log(props)
    console.log(chiTietKhoaHoc)
    return (
        
        <div>
            <h1>Chi tiet khoa hoc</h1>
            <Card className="col-md-4">
                <CardImg top src={chiTietKhoaHoc.hinhAnh} width="100%"></CardImg>
                <CardBody>
                    <p>{chiTietKhoaHoc.tenKhoaHoc}</p>
                    <p>{chiTietKhoaHoc.moTa}</p>
                   
                </CardBody>
            </Card>
        </div>
    )
}


const mapStateToProps = state => ({
    chiTietKhoaHoc: state.quanLyKhoaHocReducer.chiTietKhoaHoc,
    
})

const mapDispatchToProps = dispatch => ({
    layChiTietKhoaHoc: maKhoaHoc => dispatch(layChiTietKhoaHoc(maKhoaHoc))
})
export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc)