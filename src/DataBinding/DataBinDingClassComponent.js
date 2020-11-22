import React, { Component } from 'react'

export default class DataBinDingClassComponent extends Component {
    sinhVien = {
        ma: '001',
        ten: 'Đại ca',
        hinhAnh: "https://i.pinimg.com/564x/dd/0e/86/dd0e86cc6c9ae4bc0473c762e275f9c4.jpg"
    }
    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} width="200" height="200" alt="321" />
    }
    render() {
        const title = 'frontend54';
        const renderTitle = () => {
            return <p className="text-danger">{title}</p>
        };

        return (
            <div>
                <h3>React databinding</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <ul>
                    <li>Mã sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên : {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt='123' /></li>
                    {/* <li>{this.renderPicture()}</li> */}
                </ul>
            </div>
        )
    }
}
