import React, { Component } from 'react'
import data from "./Data/Data.json"
import Modal from './Modal';
import Product from './Product';
export class ProductList extends Component {
    state = {
        productDetail: data[0],
        cart: [{
            maSP: 1,
            tenSP: "VinSmart Live",
            giaBan: 5700000,
            soLuong: 1,
            hinhAnh: "./img/vsphone.jpg"
        }]
    }
    renderProduct = () => {
        return data.map((sp, index) => {
            return <Product key={index} viewDetailHandler={this.viewDetailHandler} sp={sp} viewDetailGioHang={this.addToCart} />
        })
    }
    viewDetailHandler = (sp) => {
        this.setState({
            productDetail: sp,
        })
    }
    addToCart = (sp) => {
        const productUpdate = { ...sp, soLuong: 1 };
        const index = this.state.cart.findIndex((sp) => sp.maSP === productUpdate.maSP);
        if (index !== -1) {
            const newCart = [...this.state.cart];
            newCart[index].soLuong += 1;
            this.setState({
                cart: newCart,
            });
        } else {
            this.setState({
                cart: [...this.state.cart, productUpdate],
            });
        } 
    }
    render() {

        const { productDetail, cart } = this.state;

        return (

            <div>
                <Modal cart={cart} />
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="row mt-5">
                    <div className="col-6 text-center">
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} width="300"></img>
                    </div>
                    <div className="col-6">
                        <h5>Thông số kỹ thuật</h5>
                        <table className="table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList


