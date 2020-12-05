import React, { Component } from 'react'
import {connect} from 'react-redux';
import DanhSachSanPham from './DanhSachSanPham';
class GioHang extends Component {

    render() {
        console.log("propsGioHang",this.props.gioHang);
        return (
            <div>
                <h1 className="text-center display-4">Giỏ hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            1
                        </td>
                        <td>Iphone</td>
                        <td><img src='./img/sp_iphoneX.png' width="50" height="50"></img></td>
                        <td>1</td>
                        <td>10000</td>
                        <td>10000</td>
                        <button className="btn btn-danger">Xóa</button>
                    </tbody>
                </table>
            </div>
        )
    }
}
//Định nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state)=>{
    return {
        gioHang:state.stateGioHang.gioHang
    }
}
//Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);
