import React, { Component } from 'react'

export default class Event extends Component {
    handleClick = () => {
        console.log('Click!!!!!');
        alert('Chao ban');
    }
    handleClick1 = (name) => {
        console.log('Click!!!!!');
        alert(name);
    }
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.handleClick}>Click Me</button>
                <button className="btn btn-success" onClick={() => this.handleClick1('Chao ban abc')}>Click Me</button> 
                {/* xu ly su kien callback function co tham so phai viet function nac danh () =>  */}
            </div>
        )
    }
}
