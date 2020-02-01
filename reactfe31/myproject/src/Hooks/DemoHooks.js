import React, { Component, useState, useEffect } from 'react'
import useCounter from './useCounter'
import useForm from './useForm'
export class DemoClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h3>State Class</h3>
                <p>{this.state.count}</p>
                <button className="btn btn-success" onClick={() => this.setState(state => ({
                    count: state.count + 1
                }))}>Cong</button>
            </div>
        )
    }
}



//Validation cua form nao thi form do tu viet
//Login co 2 field username va password
export const validation = (values) => {
    let errors = {};
    if (!values.username) {
        errors.username = "Khong de trong"
    }
    if (!values.password) {
        errors.password = "Khong de trong"
    }
    if (values.username.length < 5) {
        errors.username = "Do dai it nhat 3 ky tu"
    }
    if (values.username.length > 15) {
        errors.username = "Do dai toi da 13 ky tu"
    }
    return values
}

//su dung state trong function component
export const DemoHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    }) //state la 1 object

    //Su dung custom hook
    const [number, inc, desc] = useCounter(0)

    const [loginForm, handleChangeLoginForm, handleBlurLoginForm] = useForm(
        {
            values: {
                username: '',
                password: ''
            },
            errors: {
                username: '',
                password: ''
            }
        },
        validation
    )

    useEffect(() => {
        //Chay khi state thay doi va render lai nhan vao 2 tham so la callback va array 
        console.log('count sau khi render', count)
    }, [count]) //cac tham so ma no se so sanh de xem co chay ham useEffect sau khi render lai hay khong
    //nhu bien count thay doi thi ham useEffect moi chay, bien name thay doi se khong anh huong

    useEffect(() => {
        //Chay khi state thay doi va render lai nhan vao 2 tham so la callback va array 
        console.log('name sau khi render', count)
    }, [name]) // chi chay khi name thay doi

    useEffect(() => {
        console.log('object')
    }, [])// array khong tham so useEffect chi chay 1 lan duy nhat => tuong ung voi componentDisMount
    //su dung goi call API
    //khong the khai bao useEffect trong if else hoac for while
    useEffect(() => {
        console.log('object') //khong co tham so thu 2 ham useEffect se chay moi khi render lai
        //Khong duoc goi API trong ham nay
    })
    const handleChange = (e) => {
        // const {name, value} = e.target
        setName({ ...name, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {/* <h1>Demo Hooks</h1>
            <p>{count}</p>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>Cong</button>
            {count % 2 === 0 && <HooksChild/>} */}
            {/* <input type="text" 
            name="firstName" 
            value={name.firstName} 
            onChange={handleChange} />
            <input type="text" 
            name="lastName" 
            value={name.lastName} 
            onChange={handleChange} /> */}
            <p>{number}</p>
            <button onClick={inc}>Tang</button>
            <button onClick={desc}>Giam</button>


            <input type="text"
                name="username"
                value={loginForm.values.username}
                onChange={handleChangeLoginForm}
                onBlur={handleBlurLoginForm} />
            {loginForm.errors.username && <p>{loginForm.errors.username}</p>}
            <input type="text"
                name="password"
                value={loginForm.values.password}
                onChange={handleChangeLoginForm}
                onBlur={handleBlurLoginForm} />
            {loginForm.errors.password && <p>{loginForm.errors.password}</p>}
        </div>
    )
}
export const HooksChild = () => {

    useEffect(() => {
        let timeOut = setTimeout(() => {
            console.log('Render sau 1s')
        }, 1000)
        console.log('HooksChild Render')
        return () => {
            console.log('Unmounting')
            clearTimeout(timeOut)
        }
    })
    return (
        <div>
            Hello
        </div>
    )
}
