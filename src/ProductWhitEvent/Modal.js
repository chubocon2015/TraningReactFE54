import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên Sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cart.map((product, index) => {

                                            return (
                                                <tr key={index}>
                                                    <td>{product.maSP}</td>
                                                    <td><img src={product.hinhAnh} width={30} height={50} /></td>
                                                    <td>{product.tenSP}</td>
                                                    <td>{product.soLuong}</td>
                                                    <td>{product.giaBan}</td>
                                                    <td>{product.soLuong * product.giaBan}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


