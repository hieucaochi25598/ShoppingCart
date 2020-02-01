import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { dangNhapAction } from '../redux/actions/QuanLyNguoiDung'
import { Redirect } from 'react-router-dom'
import { setAuthorization } from '../utils/axios'
const validate = values => {
    let errors = {}
    Object.keys(values).forEach(key => {
        if (!values[key]) {
            errors[key] = "Required"
        }
    })
    return errors
}
const DangNhap = (props) => {
    // console.log(props)
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.quanLyNguoiDungReducer)
    const handleLoginSuccess = () => {
        //Day nguoi dung vao trang / sua khi dang nhap thanh cong ben action
        
        props.history.replace('/')
        window.location.reload()
    }
    useEffect(() => {
        if (Object.keys(userInfo).length !== 0) {
            props.history.push('/')
        }
    }, [userInfo])
    return (
        <div>
            <h1>Form Dang Nhap</h1>
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: ''
            }}
                validate={validate}
                onSubmit={values => dispatch(dangNhapAction(values, handleLoginSuccess))}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>
                    <Form>
                        <FormGroup>
                            <Label>Tai khoan</Label>
                            {/* <Input type="text"
                                name="taiKhoan"
                                value={values.taiKhoan}
                                handleChange={handleChange}
                                handleBlur={handleBlur} /> */}
                            {/* <Field type="text" name="taiKhoan" component={Input}/> su dung khi component input tu viet */}
                            {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                            <Input tag={Field} type="text" name="taiKhoan" />
                            <ErrorMessage name="taiKhoan" />
                        </FormGroup>
                        {/* {errors.taiKhoan && touched.taiKhoan && <FormFeedback>{errors.taiKhoan}</FormFeedback>} */}
                        <FormGroup>
                            <Label>Mat Khau</Label>
                            {/* <Field type="password" name="matKhau" component={Input}/> */}
                            {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                            <Input tag={Field} type="password" name="matKhau" />
                            <ErrorMessage name="matKhau" />
                        </FormGroup>
                        <Button onClick={handleSubmit} color="primary">Dang nhap</Button>
                    </Form>
                }
            </Formik>
        </div>
    )
}
export default DangNhap
