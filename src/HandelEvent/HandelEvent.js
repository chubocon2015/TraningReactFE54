import React, { Component } from 'react'

export default class HandelEvent extends Component {
    showMess = () =>{
        alert('hello cybersoft frontend 54');
    }
    showInfo = (info) =>{
        alert(info);
    }
    render() {
        const title = 'cybersoft';
        return (
            <div>
                <div className="container">
                    <h3>Handel Event</h3>
                    <button onClick={this.showMess}>Click Đi</button>
                    <button onClick={()=>{
                        alert(`hello ${title}  frontend 54`);
                    }}>show message</button>
                    <button onClick={()=>{
                        this.showInfo('hello fe54');
                    }}>show info</button>
                    <button onClick={this.showInfo.bind(this,'hello cyberfe54')}>Click Đi</button>
                </div>
            </div>
        )
    }
}
