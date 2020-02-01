import React, { Component } from 'react'

export default class BaiTapStateLogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin: false
        }
    }
    
    handleLogin = () => {
        this.setState(state => ({
            isLogin: !state.isLogin
        }))
    }

    render() {
        return (
            <div>
                {this.state.isLogin ? (
                    <div>
                        <p>Ban da dang nhap thanh cong</p>
                        <button className="btn btn-danger" onClick={() => this.handleLogin()}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <p>Hay dang nhap</p>
                        <p>{this.props.name}</p>
                        <button className="btn btn-success" onClick={() => this.handleLogin()}>Login</button>
                    </div>
                )}
            </div>
        )
    }
}
