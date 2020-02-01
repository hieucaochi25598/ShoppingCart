import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props)
        this.state = {
             linkHinh: './img/imgBlackCar.jpg'
        }
    }
    handleClick = (color) => {
        switch(color){
            case 'red':
                this.setState(
                    {linkHinh: './img/imgRedCar.jpg'}
                )
            break;
            case 'silver':
                this.setState(
                    {linkHinh: './img/imgSilverCar.jpg'}
                )
                break;
            case 'black':
                this.setState(
                    {linkHinh: './img/imgBlackCar.jpg'}
                )
            break;
            default:
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.linkHinh} width="300px"/>
                <button type="button" class="btn btn-danger" onClick={() => this.handleClick('red')}>Red</button>
                <button type="button" class="btn btn-light" onClick={() => this.handleClick('silver')}>Silver</button>
                <button type="button" class="btn btn-dark" onClick={() => this.handleClick('black')}>Black</button>
            </div>
        )
    }
}
