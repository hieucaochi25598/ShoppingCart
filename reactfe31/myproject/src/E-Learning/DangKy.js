import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, useField } from 'formik'
import { Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'
import { TextField, InputAdornment, IconButton, FormControl } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { dangKyAction } from '../redux/actions/QuanLyNguoiDung'
import * as yup from 'yup'

const validationSchema = yup.object({
    taiKhoan: yup.string()
        .required('Required')
        .max(20, 'khong dc qua 20 ky tu')
        .min(3, ' it nhat 3 ky tu'),
    matKhau: yup.string()
        .required('Required'),
    hoTen: yup.string()
        .required('Required'),
    soDT: yup.string()
        .required('Required').matches(/(09|01[2|6|8|9])+([0-9]{8})\b/g, 'Invalid number'),
    email: yup.string()
        .required('Required')
})


const MyTextField = ({...props}) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''
    return (<TextField {...field} {...props}
        helperText={errorText}
        error={errorText}
        variant="outlined"
    />)
}
const DangKy = (props) => {
    const dispatch = useDispatch();
    const handleRegisterSuccess = () => {
        //Ham callback nay se chay khi duoc goi ben action
        props.history.push('/login')
    }
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div>
            <h1 className="text-center">Form Dang Ky</h1>
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDT: '',
                email: '',
            }}
                validationSchema={validationSchema}
                onSubmit={values => dispatch(dangKyAction(values, handleRegisterSuccess))}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>
                    <Form className="text-center">
                        <FormGroup>
                                {/* <Input type="text"
                                name="taiKhoan"
                                value={values.taiKhoan}
                                handleChange={handleChange}
                                handleBlur={handleBlur} /> */}
                                <MyTextField
                                    type="text"
                                    name="taiKhoan"
                                    label="Tai Khoan"
                                />
                                {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                                {/* <Input tag={Field} type="text" name="taiKhoan" /> */}
                                {/* <ErrorMessage name="taiKhoan" /> */}
                          
                        </FormGroup>
                        {/* {errors.taiKhoan && touched.taiKhoan && <FormFeedback>{errors.taiKhoan}</FormFeedback>} */}
                        <FormGroup>
                            
                                {/* <Field type="password" name="matKhau" component={Input}/> */}
                                {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                                <MyTextField type={showPassword ? "text" : "password"} name="matKhau" label="Mat Khau"
                                    // InputProps={{
                                    //     endAdornment: <InputAdornment position="end">
                                    //         {/* <i class="fa fa-eye" onClick={() => setShowPassword(!showPassword)}
                                    //             style={{ cursor: "pointer" }}></i> */}
                                    //         <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    //             <i class="fa fa-eye"></i>
                                    //         </IconButton>
                                    //     </InputAdornment>
                                    // }}
                                />
                            
                        </FormGroup>
                        <FormGroup>
                        

                                {/* <Field type="text" name="hoTen" component={Input}/> */}
                                {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                                <MyTextField type="text" name="hoTen" label="Ho ten" />
                        
                        </FormGroup>
                        <FormGroup>
                      

                                {/* <Field type="text" name="soDT" component={Input}/> */}
                                {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                                <MyTextField type="text" name="soDT" label="So dien thoai" />
                            
                        </FormGroup>
                        <FormGroup>
                           

                                {/* <Field type="email" name="email" component={Input}/> */}
                                {/* Su dung field se bo 3 value, handleChange, handleBlur */}
                                <MyTextField type="text" name="email" label="Email" />
                          
                        </FormGroup>
                        <Button onClick={handleSubmit} color="primary">Dang ky</Button>
                    </Form>
                }
            </Formik>
        </div>
    )
}
export default DangKy
