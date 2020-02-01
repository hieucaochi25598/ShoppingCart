import React, { useState } from 'react'
import { validation } from './DemoHooks'

const useForm = (initialValues) => {
    //inititalValues la du lieu duoc truyen vao khi su dung useForm
    const [form, setForm] = useState(initialValues, validation)
    // {
    //     values: {
    //         name: '',
    //         password: ''
    //     },
    //     errors: {
    //         name: ''
    //         password: ''
    //     }
    // }
    const handleChange = e => {
        setForm({ ...form, values: { ...form.values, [e.target.name]: e.target.value }})
    }
    const handleBlur = e => {
        // if(!e.target.value){
        //     setForm({
        //         ...form,
        //         errors: {...form.errors, [e.target.name]: 'Khong duoc de trong'}
        //     })
        // }
        const errors = validation(form.values)
        setForm({
            ...form,
            errors: errors
        })
    }
    return [form, handleChange, handleBlur];
}
export default useForm
